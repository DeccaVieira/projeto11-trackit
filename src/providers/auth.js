import react from "react";
import { Context } from "react";
import { useState } from "react";
//import daysOfWeek from "../Pages.js/Routines/daysOfWeek";

export const AuthContext = react.createContext({});

export const AuthProvider = (props) => {
    const [form, setForm] = useState({ email: "", password: "" })
    const [user, setUser] = useState({ id: "", name: "", image: "", password: "", token: "" })
    const [name, setName] = useState("")
    const [routine, setRoutine] = useState(false)
    const [todayList, setTodayList] = useState([])
    const [token, setToken] = useState("")
    const [daysOfWeek, setDaysOfWeek] = useState(
        [{ id: 0, name: "D" , value: "DOmingo"},
        { id: 1, name: "S" , value: "Segunda-Feira"},
        { id: 2, name: "T" ,value: "Terça-Feira"},
        { id: 3, name: "Q" , value:"Quarta-Feira"},
        { id: 4, name: "Q" , value:"Quinta-Feira"},
        { id: 5, name: "S" ,value: "Sexta-Feira"},
        { id: 6, name: "S" ,value: "Sábado"}
        ])

    return (
        <AuthContext.Provider value={{ token, setToken, name, setName, form, setForm, user, setUser, routine, setRoutine, daysOfWeek, todayList, setTodayList }}>
            {props.children}
        </AuthContext.Provider>
    )
}