import react from "react";
import { Context } from "react";
import { useState } from "react";
import daysOfWeek from "../Pages.js/Routines/daysOfWeek";

export const AuthContext = react.createContext({});

export const AuthProvider = (props) => {
    const [form, setForm] = useState({email:"", password:""})
    const [user, setUser] = useState({id:"", name:"", image:"", password:"", token:""})
    const [routine, setRoutine] = useState(false)

    return (
        <AuthContext.Provider value={{form , setForm, user, setUser, routine, setRoutine, daysOfWeek}}>
            {props.children}
        </AuthContext.Provider>
    )
}