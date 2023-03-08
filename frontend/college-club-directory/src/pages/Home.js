import React from "react";

// import components
import Banner from "../components/Banner";
import ClubList from "../components/ClubList";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <ClubList />
    </div>
  );
};

export default Home;
