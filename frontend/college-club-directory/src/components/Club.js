import React, { useContext } from "react";

import { BiBed, BiBath, BiArea, RiMailLine } from "react-icons/ri";

const Club = ({ club }) => {
  const { type, name, description, dept, recruitingYear, imageLg, email } =
    club;

  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[50px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition rounded-b-lg">
      <img
        src={imageLg}
        className="mb-4 text-sm w-[310 px] rounded-t-lg rounded-tl-[50px] rounded-b-lg"
        alt="No"
      />
      <div className="flex gap-x-2">
        <div className="bg-green-500 rounded-full text-white px-3">{type}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">{dept}</div>
      </div>
      <div className="text-lg font-semibold mt-5 justify-center h-12">
        {name}
      </div>
      <div className="text-lg font-semibold text-violet-500 mb-4 mt-3">
        Recruiting from year : {recruitingYear}
      </div>
      <div className="">
        <div className="text-md font-light flex flex-row gap-1 justify-left items-center">
          {" "}
          <RiMailLine className="text-violet-700" /> {email}
        </div>
      </div>
    </div>
  );
};

export default Club;
