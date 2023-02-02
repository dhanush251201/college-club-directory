import React, {useContext} from 'react';

import {ClubContext} from './ClubContext'

import Club from './Club';

import {Link} from 'react-router-dom'

import {ImSpinner2} from 'react-icons/im'

const ClubList = () => {

    const {clubs,loading} = useContext(ClubContext)

    // if loading true
    if(loading) {
        return(
            <ImSpinner2 className='mx-auto animate-spin text-violet-700 rxt-4xl mt-[200px]'/>
        );
    }

    if(clubs.length <1){
        return(
            <div className='flex w-auto items-center justify-center'>
            <div className='flex items-center text-center text-3xl text-gray-400 mt-48'>Sorry, nothing found</div>

            </div>
        );
    }

    return(
        <section className="">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
                    {
                        clubs.map((club,index) =>{
                             return (
                                <Link to={`/club/${club.id}`} key={index}>
                                    <Club club={club} />
                                </Link>
                             );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default ClubList;