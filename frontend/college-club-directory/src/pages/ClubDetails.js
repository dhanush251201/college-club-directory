import {
  EnvelopeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChatBubbleLeftEllipsisIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import React from "react";

//import data

import { ClubData } from "../data";
import { useParams } from "react-router-dom";
import { RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ClubDetails = () => {
  const { id } = useParams();

  const club = ClubData.find((club) => {
    return club.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="lg:flex lg:items-center lg:justify-between mx-auto mb-20">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {club.name}
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <UserGroupIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {club.type}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <AcademicCapIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {club.dept}
              </div>
            </div>
          </div>
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="ml-3 hidden sm:block">
              <a
                href="mailto:!{club.email}"
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <EnvelopeIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Email
              </a>
            </span>
            <span className="ml-3 hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <ChatBubbleLeftEllipsisIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Website
              </button>
            </span>

            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-violet-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <UserIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5"
                  aria-hidden="true"
                />
                Register
              </button>
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-start mx-auto">
            <div className="flex-col">
              <div className="pr-5 mt-4 py-2">
                <p className="rounded-lg bg-indigo-50 shadow-lg px-7 py-5">
                  <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl pb-2">
                    About
                  </h2>
                  {club.description}
                </p>
              </div>
              <div className="flex justify-between">
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
            <img
              src={club.imageLg}
              className="w-1/3 shadow-lg rounded-t-lg rounded-tl-[50px] rounded-b-lg rounded-br-[50px] mx-2 my-2"
              alt="Club"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubDetails;
