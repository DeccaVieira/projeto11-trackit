import react from "react";
import { Context } from "react";
import { useState } from "react";
//import daysOfWeek from "../Pages.js/Routines/daysOfWeek";

export const AuthContext = react.createContext({});

export const AuthProvider = (props) => {
    const [form, setForm] = useState({ email: "", password: "" })
    const [user, setUser] = useState({ id: "", name: "", image: "", password: "", token: "" })
    const [routines, setRoutines] = useState({name: "", days:[1]})
    const [routine, setRoutine] = useState(false)
    const [daysOfWeek, setDaysOfWeek] = useState(
        [{ id: 0, name: "D" },
        { id: 1, name: "S" },
        { id: 2, name: "T" },
        { id: 3, name: "Q" },
        { id: 4, name: "Q" },
        { id: 5, name: "S" },
        { id: 6, name: "S" }
        ])
    return (
        <AuthContext.Provider value={{ routines, setRoutines, form, setForm, user, setUser, routine, setRoutine, daysOfWeek }}>
            {props.children}
        </AuthContext.Provider>
    )
}