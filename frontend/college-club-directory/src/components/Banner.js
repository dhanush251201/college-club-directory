import React from "react";
import Image from "../assets/img/home-bg.jpg";
import Search from "./Search";

const Banner = () => {
  return (
    <section className="max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start justify-center flex-1 px-4 lg:px-0 text-center lg:text-left">
          <h1 className="text-4x1 lg:text-[58px] font-semibold leading-none mb-6 text-violet-700">
            Explore clubs at PSG
          </h1>
          <p className="max-w-[480px] mb-8">
            Club directory for PSG College of Technology.
            Find the club best suited for your interests.
            Learn and improve yourselves in a holistic environment.
            A wide variety fo technical and non technical clubs are present.
            Regular events and anctivites are acarried out by all the clubs so watch out for your favourite club's activities.
          </p>
        </div>
        <div className="hidden lg:flex flex-1 container mx-auto xl:mr-[110px]">
          <img src={Image} className="rounded-xl" alt="PSGImage" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
