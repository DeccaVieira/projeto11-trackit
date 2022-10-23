import axios from "axios"
import { useEffect, useState, useNavigate } from "react"
import styled from "styled-components"
import react from "react"
import { AuthContext } from "../../providers/auth";
import FormMyRoutines from "./FormMyRoutines";


export default function MyRoutines() {
    const {routine, setRoutine, routines, setRoutines, daysOfWeek} = react.useContext(AuthContext)

console.log(daysOfWeek)

/*function handleForm(e) {
    setRoutines({...routines, [e.target.name]: e.target.value})

 }

    function addRoutine(){
        //const body = {
           // name: name.name,
            //days: name.days // segunda, quarta e sexta         }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIwOCwiaWF0IjoxNjY2MzkwMDA0fQ.q7H2S89je-EKcJChLU6cq0u8n8bjUL1-_ujqFLEKpPo"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, config);

        promise.then((res) => {
            console.log(res.data);
        })
        
        promise.catch((err) => {
            alert(err.response.data.message)
        })

    }*/
    //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIwOCwiaWF0IjoxNjY2MzEyNDYyfQ.NKyWa0PL39kNXjXGDbGrxiJ8WC1MxPfLzLEaDxX3gpQ"
    console.log(routine)
    return (<>
    <StyleMyRoutines>
        <h1>Meus hábitos</h1>
        <button onClick={(() => setRoutine(true))}><h2>+</h2></button>
        {routine === true && 
        <FormMyRoutines/>}
    </StyleMyRoutines>
    </>)
}
const StyleMyRoutines = styled.section`
height: 85px;
width: 375px;
left: 0px;
margin-top: 70px;
background-color: #FFFFFF;
display:flex;
align-items:center;
padding-left:18px;
padding-right: 18px;
justify-content:space-between;
background-color:yellow;
position:relative;
h1{
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    color:#126BA5;     
}
 button{
    width:40px;
    height: 35px;
    background-color:#52B6FF;
    display:flex;
    justify-content:center;
    align-items:center;
    right:18px;
border:none;
border-radius: 4.64px;
position:absolute;
 }
 h2{
    font-family: Lexend Deca;
font-size: 27px;
font-weight: 400;
color:#ffffff;
 }
`