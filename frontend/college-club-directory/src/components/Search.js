import React, {useContext} from "react";

// import components
import DeptDrop from "./DeptDrop";
import TypeDrop from "./TypeDrop";
import RecruitingFromDrop from "./RecruitingFromDrop";

// import icons
import {RiSearch2Line} from 'react-icons/ri'
import { ClubContext } from "./ClubContext";

const Search = () => {
    const { clubs } = useContext(ClubContext)
    // console.log(clubs)

    return (
        <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-xl">
            <DeptDrop />
            <TypeDrop />
            <RecruitingFromDrop />
            <button className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white">
                <RiSearch2Line/> 
            </button>
        </div>
    );
}

export default Search;