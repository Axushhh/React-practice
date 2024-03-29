import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null) // user is variable and setUser is method 
    return(
        // in value user is passed to take value while setUser is used to add value in this state
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )    
}

export default UserContextProvider;