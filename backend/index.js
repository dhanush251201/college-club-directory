// start of shrivi
const { json } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3101;
const mongoose = require("mongoose");

const User = require("./schema/User");
const Admin = require("./schema/Admin");
const Clubs = require("./schema/Clubs");

const bcrypt = require("bcryptjs");
const { findOneAndUpdate } = require("./schema/User");

app.use(json());
app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose
  .connect(
    "mongodb+srv://dbUser:NbO8EYzM9qcicoCn@clubdirectory.wzqvtyu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/users/signup", (req, res) => {
  const { name, email, password, clubId, roll } = req.body;
  // validate email
  if (!email.includes("@")) {
    res.json({
      status: 400,
      message: "Invalid Email",
    });
  }
  // validate password
  if (password.length < 6) {
    res.json({
      status: 400,
      message: "Minimum password length is 6",
    });
  }
  const hashpassword = bcrypt.hashSync(password, 10);
  const user = new User({
    name,
    email,
    password: hashpassword,
    clubId,
    roll,
  });
  user
    .save()
    .then(() => {
      res.json({
        status: 201,
        message: "User Created Successfully",
      });
    })
    .catch((err) => {
      res.json({
        status: 400,
        message: err,
      });
    });
});
// end of shrivi

// start of kirthi
app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log("User Logged in");
  console.log(user);
  if (!user) {
    res.json({
      status: 404,
      message: "User not found",
    });
  } else {
    if (bcrypt.compareSync(password, user.password)) {
      res.json({
        status: 200,
        message: "Logged in Successfully",
      });
    } else {
      res.json({
        status: 400,
        message: "Incorrect Password",
      });
    }
  }
});

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  const selectedparams = users.map((user) => {
    return {
      name: user.name,
      email: user.email,
      clubId: user.clubId,
      roll: user.roll,
    };
  });
  res.send(selectedparams);
});
// end of kirthi

// start of samrdhhi
app.post("/api/admin/signup", (req, res) => {
  const { name, email, password, clubId } = req.body;
  if (!email.includes("@")) {
    res.status(400).send("Invalid email");
  }
  // validate password
  if (password.length < 6) {
    res.status(400).send("Password should be atleast 6 characters");
  }
  const hashpassword = bcrypt.hashSync(password, 10);
  const admin = new Admin({
    name,
    email,
    password: hashpassword,
    clubId,
  });
  admin
    .save()
    .then(() => {
      res.send(`Admin created ${admin}`);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  console.log("Admin Logged in");
  console.log(admin);
  if (!admin) {
    res.json({
      status: 404,
      message: "User not found",
    });
  } else {
    if (bcrypt.compareSync(password, admin.password)) {
      res.json({
        status: 200,
        message: "Logged in Successfully",
      });
    } else {
      res.json({
        status: 400,
        message: "Incorrect Password",
      });
    }
  }
});

app.get("/api/admins", async (req, res) => {
  const admins = await Admin.find();
  const selectedparams = admins.map((user) => {
    return {
      name: user.name,
      email: user.email,
      clubId: user.clubId,
    };
  });
  res.send(selectedparams);
});
// end of samrddhi

// start of Daf
app.post("/api/addclub/:clubid", (req, res) => {
  const { clubid } = req.params;
  const { name, description, slogan, advisor, m_count } = req.body;
  const club = new Clubs({
    clubid,
    name,
    description,
    slogan,
    advisor,
    m_count,
  });
  club
    .save()
    .then(() => {
      res.status(201).send(`Club added ${club}`);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/api/club/:clubid", async (req, res) => {
  const { clubid } = req.params;
  const club = await Clubs.find({ clubid });
  if (!club) {
    res.status(404).send("Club not found");
  }
  res.send(club);
});

app.get("/api/club", async (req, res) => {
  const clubs = await Clubs.find();
  if (!clubs) {
    res.status(404).send("No clubs found");
  }
  res.send(clubs);
});
// end of Daf

// start of NXPP
app.patch("/api/club/update/:clubid", async (req, res) => {
  const { clubid } = req.params;
  const club = await Clubs.findOneAndUpdate({ clubid: clubid }, req.body, {
    new: false,
  });
  if (!club) {
    res.status(404).send("Club not found");
  }
  res.json({ msg: "Post updated" });
});

app.delete("/api/users/delete/:rollno", async (req, res) => {
  const { rollno } = req.params;
  // console.log(rollno);
  try {
    const user = await User.findOneAndDelete({ roll: rollno });
    if (!user) {
      res.status(404).send("User not found");
    }
    res.status(200).send("User deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
