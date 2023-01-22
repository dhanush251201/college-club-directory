import React, { useState, useEffect, useContext } from "react";

// import icons

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { ClubContext } from "./ClubContext";


const RecruitingFromDrop = () => {
    const { recruitingYear,setRecruitingYear,recruitingYears } = useContext(ClubContext) 

    console.log(recruitingYear)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Menu as="div" className='dropdown  relative'>
            <Menu.Button 
            className='dropdown-btn w-full text-left' 
            onClick={()=>setIsOpen(!isOpen)}
            >
                <RiMapPinLine className="dropdown-icon-primary"/>
                <div className="">
                    <div className="text-[15px] font-medium leading-tight">{recruitingYear}</div>
                    <div className="text-[13px]">Select Club type</div>
                </div>

                    {
                        isOpen?(
                            <RiArrowDownSLine className="dropdown-icon-secondary "/>
                        ):(
                            <RiArrowUpSLine className="dropdown-icon-secondary" />
                        )
                    }
                
            </Menu.Button>

            <Menu.Items className=' dropdown-menu '>
                {recruitingYears.map((recruitingYear,index) => {
                    return (
                        <Menu.Item 
                            as='li' 
                            key={index} 
                            className='cursor-pointer hover:text-violet-700 transition' 
                            onClick={()=>setRecruitingYear(recruitingYear)} 
                        >
                            {recruitingYear}
                        </Menu.Item>
                    );
                })}
            </Menu.Items> 

        </Menu>
    );
}

export default RecruitingFromDrop;