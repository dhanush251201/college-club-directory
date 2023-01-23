import React, {useState,useEffect,createContext} from "react";

// import data
import {ClubData} from '../data'

// create context
export const ClubContext = createContext();


const ClubContextProvider = ({children}) => {
    const [clubs,setClubs] = useState(ClubData);
    const [departments,setDepartments] = useState([]);
    const [type,setType] = useState("Type of club(Any)");
    const [types,setTypes] = useState([]);
    const [recruitingYear,setRecruitingYear] = useState("Any");
    const [recruitingYears,setRecruitingYears] = useState([]);
    const [dept,setDept] = useState("Department(Any)");
    const [description,setDescription] = useState(""); 
    const [loading, setLoading] = useState(false);
 
    useEffect(()=>{
        const allDepartments = clubs.map((value) => {
            return value.dept;
        })
        //remove duplicates
        const uniqueDepartments=['Department(Any)',...new Set(allDepartments)]
        setDepartments(uniqueDepartments)

    }, [])

    useEffect(()=>{
        const allTypes = clubs.map((value) => {
            return value.type;
        })
        //remove duplicates
        const uniqueTypes=['Type Of Club(Any)',...new Set(allTypes)]
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
        console.log(dept , type, recruitingYear)
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
                handleClick
            } 
        }
        >
            {children}
        </ClubContext.Provider>
    );
}

export default ClubContextProvider;  