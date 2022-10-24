import react from "react";
import { useState } from "react";


export const AuthContext = react.createContext({});

export const AuthProvider = (props) => {
    const [form, setForm] = useState({ email: "", password: "" })
    const [user, setUser] = useState({ id: "", name: "", image: "", password: "", token: "" })
    const [name, setName] = useState("")
    const [routine, setRoutine] = useState(false)
    const [todayList, setTodayList] = useState([])
    const [token, setToken] = useState("")
    const [check, setCheck] = useState(false)
    const [daysOfWeek] = useState(
        [{ id: 0, name: "D" , value: "DOmingo"},
        { id: 1, name: "S" , value: "Segunda-Feira"},
        { id: 2, name: "T" ,value: "Terça-Feira"},
        { id: 3, name: "Q" , value:"Quarta-Feira"},
        { id: 4, name: "Q" , value:"Quinta-Feira"},
        { id: 5, name: "S" ,value: "Sexta-Feira"},
        { id: 6, name: "S" ,value: "Sábado"}
        ])

    return (
        <AuthContext.Provider value={{ check, setCheck,token, setToken, name, setName, form, setForm, user, setUser, routine, setRoutine, daysOfWeek, todayList, setTodayList }}>
            {props.children}
        </AuthContext.Provider>
    )
}