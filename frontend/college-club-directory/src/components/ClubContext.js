import React, {useState,useEffect,createContext} from "react";

// import data
import {ClubData} from '../data'

// create context
export const ClubContext = createContext();

const ClubContextProvider = ({children}) => {
    const [clubs,setClubs] = useState(ClubData);
    const [typeOfClub,setTypeOfClub] = useState("Club");
    const [loading, setLoading] = useState(false);
    return(
        
        <ClubContextProvider value={{setClubs,clubs,setLoading,loading,setTypeOfClub,typeOfClub}}>
            {children}
        </ClubContextProvider>
    );
}

export default ClubContextProvider;