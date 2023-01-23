import React, {useContext} from 'react';

import {ClubContext} from './ClubContext'

import Club from './Club';

import {Link} from 'react-router-dom'

import {ImSpinner2} from 'react-icons/ri'

const ClubList = () => {

    const {clubs,loading} = useContext(ClubContext)
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