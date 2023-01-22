import React, {useState,useEffect,createContext} from "react";

// import data
import {ClubData} from '../data'

// create context
export const ClubContext = createContext();


const ClubContextProvider = ({children}) => {
    const [clubs,setClubs] = useState(ClubData);
    const [departments,setDepartments] = useState([]);
    const [type,setType] = useState("Type of club");
    const [types,setTypes] = useState([]);
    const [recruitingYear,setRecruitingYear] = useState("1");
    const [dept,setDept] = useState("Department(any)");
    const [description,setDescription] = useState(""); 
    const [loading, setLoading] = useState(false);
 
useEffect(()=>{
    const allDepartments = clubs.map((value) => {
        return value.dept;
    })
    //remove duplicates
    const uniqueDepartments=['Department(any)',...new Set(allDepartments)]
    setDepartments(uniqueDepartments)
    // console.log(allDepartments)

}, [])

useEffect(()=>{
    const allTypes = types.map((value) => {
        return value.type;
    })
    //remove duplicates
    const uniqueTypes=['Type Of Club',...new Set(allTypes)]
    setTypes(uniqueTypes)
    console.log(allTypes)
}, [])

    return(
        
        <ClubContext.Provider value={
            {
                clubs,
                setClubs,
                type,
                setType,
                types,
                dept,
                setDept,
                departments,
                recruitingYear,
                setRecruitingYear,
                description,
                loading
            } 
        }
        >
            {children}
        </ClubContext.Provider>
    );
}

export default ClubContextProvider;  