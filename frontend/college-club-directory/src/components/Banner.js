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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            repellendus quo cupiditate, veniam esse eius provident, accusamus
            sed nemo ea saepe officia qui! Labore nisi necessitatibus ipsum
            impedit ex sed.
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
