import React from "react";

//import data

import {ClubData} from '../data'

import {useParams} from 'react-router-dom'

import {RiMailLine} from 'react-icons/ri'

import {Link} from 'react-router-dom'


const ClubDetails = () => {

    const {id} = useParams()

    const club = ClubData.find((club)=>{
        return club.id === parseInt(id)
    })


    return (
        <section>
            <div className="container mx-auto min-h-[800px] mb-14">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-4xl font-bold">{club.name}</p>
                        <div className="flex flex-row w-fit justify-between">
                            <p className="text-2xl mb-4 bg-green-500 rounded-full px-3 text-white">{club.type}</p>
                            <p className="text-2xl mb-4 bg-violet-500 rounded-full px-3 text-white">{club.dept}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{club.description}</p>
                    <p>{club.recruitingYear} onwards</p>
                    <p>Faculty incharge : {club.incharge}</p>
                    <p>Student Secretary :{club.secretary}</p>
                    <div className=" flex flex-row items-center">
                        <p><RiMailLine/> {club.email}</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default ClubDetails;