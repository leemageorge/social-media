import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = () =>{
     
        setCurrentUser(
        { 
            id:1, 
            name:"Ewaan Joe", 
            profilePic:"https://static.toiimg.com/thumb/msid-94387844,width-400,resizemode-4/94387844.jpg"
        }
            );
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser] )

    return(
        <AuthContext.Provider value={{currentUser, login }}>{children}</AuthContext.Provider>
    )
}