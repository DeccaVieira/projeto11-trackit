import styled from "styled-components"
import react from "react"
import { AuthContext } from "../../providers/auth";
import daysOfWeek from "./daysOfWeek"
import { useState } from "react";
import axios from "axios";
export default function FormMyRoutines() {
    const { routine, setRoutine, routines, setRoutines } = react.useContext(AuthContext)

    const [day, setDay] = useState()
console.log(day)
    console.log(routines);
    function handleRoutines(e) {
        let novoArray = [...routines.days , day]
        setRoutines({ ...routines, [e.target.name]: e.target.value})
    }

    function addRoutine() {
        const body = {
            name: routines.name,
            days: routines.days
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIwOCwiaWF0IjoxNjY2NDg0ODc2fQ.gWaML0lTS-kjCmmbpXKaGocCNPgxgbXQIQp0P7AZaks"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, body, config);

        promise.then((res) => {
            console.log("Deu bom!");
        })

        promise.catch((err) => {
            alert(err.response.data.message)
        })

    }

    return (<StyleFormMyRoutines>
        <input name="name" value={routines.name} onChange={handleRoutines} />
        <StyleUL>
            {daysOfWeek.map((day) => <li onClick={() => routines.days.push(setDay((day.id)))} key={day.id}><h2>{day.name}</h2></li>
            )}   </StyleUL>

        <div onClick={(() => setRoutine(false))}><span>Cancelar</span></div>
        <button onClick={addRoutine}><h3>Salvar</h3></button>


    </StyleFormMyRoutines>)
}
const StyleFormMyRoutines = styled.div`
width: 340px;
height: 180px;
border-radius:5px;
margin-top:266px;
margin-left:-65px;
margin-right:18px;
background-color:red;
display:flex;
flex-direction:column;

input{
height: 45px;
width: 303px;
margin-left: 19px;
margin-right:18px;
margin-top: 18px;
border-radius: 5px;
border:none;
}
button{
height:35px;
width:84px;
left:270px;
top: 227px;
border-radius: 5px;
color:#52B6FF;
background-color: black;
}
h3{
    font-family: Lexend Deca;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color:#FFFFFF;
}
span{width: 69px;
    font-family: Lexend Deca;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color:#52B6FF;
    background-color:orange;
    margin-left:110px;
    margin-top: px;

top: 727px;
}

`
const StyleUL = styled.ul`
    display:flex;
    flex-direction:row;
    width:234px;
    display:flex;
    align-items:center;
    margin-left:19px;
    margin-top: 8px;
    li{
        width:30px;
        height:30px;
        background-color: lightblue;
        border-radius:5px;
    }
`