import React from "react";

// import images
import Image from '../assets/img/home-bg.jpg';
//
// import components
import Search from './Search';

const Banner = () => {
    return(
        <section className="h-full max-h-[640px] mb-8 xl:mb-24">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
                    <h1 className="text-4x1 lg:text-[58px] font-semibold leading-none mb-6">
                        <span className="text-violet-700">Explore</span> clubs at PSG
                    </h1>
                    <p className="max-w-[480px] mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus quo cupiditate, veniam esse eius provident, accusamus sed nemo ea saepe officia qui! Labore nisi necessitatibus ipsum impedit ex sed.
                    </p>
                </div>
                {/* Image */}
                <div className="hidden flex-1 lg:flex justify-end items-end">
                    <img src={Image} className="rounded-xl" />
                </div>
            </div>
            <Search />
        </section>
    );
}

export default Banner;