import React, { useState, useEffect, useContext } from "react";

// import icons

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { ClubContext } from "./ClubContext";


const DeptDrop = () => {
    const { dept,setDept,departments } = useContext(ClubContext) 

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Menu as="div" className='dropdown  relative'>
            <Menu.Button 
            className='dropdown-btn w-full text-left' 
            onClick={()=>setIsOpen(!isOpen)}
            >
                <RiMapPinLine className="dropdown-icon-primary"/>
                <div className="">
                    <div className="text-[15px] font-medium leading-tight">{dept}</div>
                    <div className="text-[13px]">Select Department</div>
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
                {departments.map((dept,index) => {
                    return (
                        <Menu.Item 
                            as='li' 
                            key={index} 
                            className='cursor-pointer hover:text-violet-700 transition' 
                            onClick={()=>setDept(dept)} 
                        >
                            {dept}
                        </Menu.Item>
                    );
                })}
            </Menu.Items> 

        </Menu>
    );
}

export default DeptDrop;