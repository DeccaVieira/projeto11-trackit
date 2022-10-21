import react from "react";
import { Context } from "react";
import { useState } from "react";

export const AuthContext = react.createContext({});

export const AuthProvider = (props) => {
    const [form, setForm] = useState({email:"", password:""})
    const [user, setUser] = useState({id:"", name:"", image:"", password:"", token:""})

    return (
        <AuthContext.Provider value={{form , setForm, user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}