import React, {useState,useEffect,createContext} from "react";

// import data
import {ClubData} from '../data'
import Club from "./Club";

// create context
export const ClubContext = createContext();


const ClubContextProvider = ({children}) => {
    const [clubs,setClubs] = useState(ClubData);
    const [departments,setDepartments] = useState([]);
    const [type,setType] = useState("Type Of Club - Any");
    const [types,setTypes] = useState([]);
    const [recruitingYear,setRecruitingYear] = useState("Any");
    const [recruitingYears,setRecruitingYears] = useState([]);
    const [dept,setDept] = useState("Department - Any");
    const [description,setDescription] = useState(""); 
    const [loading, setLoading] = useState(false);
 
    useEffect(()=>{
        const allDepartments = clubs.map((value) => {
            return value.dept;
        })
        //remove duplicates
        const uniqueDepartments=['Department - Any',...new Set(allDepartments)]
        setDepartments(uniqueDepartments)

    }, [])

    useEffect(()=>{
        const allTypes = clubs.map((value) => {
            return value.type;
        })
        //remove duplicates
        const uniqueTypes=['Type Of Club - Any',...new Set(allTypes)]
        setTypes(uniqueTypes)
    }, [])

    useEffect(()=>{
        const allRecruitingYears = clubs.map((value) => {
            return value.recruitingYear;
        })
        //remove duplicates
        const uniqueRecYears=['Any',...new Set(allRecruitingYears)]
        setRecruitingYears(uniqueRecYears)

    }, [])

    const handleClick = () => {
        
        setLoading(true)

        // checks for (any)

        const isDefault = (str) =>{
            return str.split(" ").includes("Any")
        }

        const minYear = parseInt(recruitingYear)

        const newClub = ClubData.filter((club)=>{
            const recYear = (parseInt(club.recruitingYear))

            if(club.dept === dept && club.type === type && recYear >= recruitingYear){
                return club
            };

            if(isDefault(dept) && isDefault(type) && isDefault(recruitingYear)){
                return club
            };

            if(!isDefault(dept) && isDefault(type) && isDefault(recruitingYear)){
                return club.dept === dept
            };

            if(isDefault(dept) && !isDefault(type) && isDefault(recruitingYear)){
                return club.type === type
            };

            if(isDefault(dept) && isDefault(type) && !isDefault(recruitingYear)){
                if(club.recruitingYear>=minYear){
                return club

                };
            };

            if(!isDefault(dept) && !isDefault(type) && isDefault(recruitingYear)){
                return club.dept === dept && club.type === type
            };

            if(!isDefault(dept) && isDefault(type) && !isDefault(recruitingYear)){
                if(club.recruitingYear>=minYear){
                return club.dept === dept

                };
            };

            if(isDefault(dept) && !isDefault(type) && !isDefault(recruitingYear)){
                if(club.recruitingYear>=minYear){
                return club.type === type

                };
            };

        });


        setTimeout(() =>{
            return newClub.length < 1 ? setClubs([]) :
            setClubs(newClub),
            setLoading(false)
        },1000)


    }

    


    return(
        
        <ClubContext.Provider value={
            {
                clubs,
                setClubs,
                type,
                types,
                setType,
                setTypes,
                types,
                dept,
                setDept,
                departments,
                recruitingYear,
                recruitingYears,
                setRecruitingYear,
                setRecruitingYears,
                description,
                loading,
                handleClick,
            } 
        }
        >
            {children}
        </ClubContext.Provider>
    );
}

export default ClubContextProvider;  