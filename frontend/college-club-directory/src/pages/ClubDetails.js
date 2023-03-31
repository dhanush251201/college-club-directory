import { AcademicCapIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import React from "react";

//import data

import { ClubData } from "../data";
import { useParams } from "react-router-dom";
// import { RiMailLine } from "react-icons/ri";
// import { Link } from "react-router-dom";

const ClubDetails = () => {
  const { id } = useParams();

  const club = ClubData.find((club) => {
    return club.id === parseInt(id);
  });
  return (
    <section>
      <div className="container mx-auto min-h-[800px] pb-10">
        <div className="mx-auto mb-10">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center">
            {club.name}
          </h2>
          <div className="mt-1 flex sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 justify-center">
            <div className="mt-2 px-2 flex items-center text-sm text-gray-500">
              <UserGroupIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {club.type}
            </div>
            <div className="mt-2 px-2 flex items-center text-sm text-gray-500">
              <AcademicCapIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {club.dept}
            </div>
          </div>
        </div>
        <div className="mx-auto mb-10">
          <img
            src={club.imageLg}
            className="w-full shadow-lg rounded-t-lg rounded-tl-[50px] rounded-b-lg rounded-br-[50px] mx-2 my-2"
            alt="Club"
          />
        </div>
        <div>
          <div className="mx-auto">
            <div className="pr-5 mt-4 py-2">
              <p className="rounded-lg bg-indigo-50 shadow-lg px-7 py-5">
                <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl pb-2">
                  About
                </h2>
                {club.description}
              </p>
            </div>
            <div className="mx-auto flex flex-col">
              <div className="py-3">
                <p className="rounded-lg bg-indigo-50 shadow-lg px-9 py-5">
                  <h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-lg pb-2">
                    Recruitment Year
                  </h2>
                  {club.recruitingYear}
                </p>
              </div>
              <div className=" py-3">
                <p className="rounded-lg bg-indigo-50 shadow-lg px-9 py-5">
                  <h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-lg pb-2">
                    Faculty Incharge
                  </h2>
                  {club.incharge}
                </p>
              </div>
              <div className="pr-5 py-3">
                <p className="rounded-lg bg-indigo-50 shadow-lg px-9 py-5">
                  <h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-lg pb-2">
                    Student Secretary
                  </h2>
                  {club.secretary}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto py-5">
          <div className="flex justify-center">
            <span className="mx-2">
              <a
                href="mailto:!{club.email}"
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Email
              </a>
            </span>
            <span className="mx-2">
              <a
                href={club.website}
                type="button"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Website
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubDetails;
