import react, { useEffect } from "react";
import { AuthContext } from "../../providers/auth";
import Header from "./Header";
import { useState } from "react";
import styled from "styled-components"
import MyRoutines from "./MyRoutines"
import axios from "axios";

export default function Routines() {
//const {form, setForm} = react.useContext(AuthContext)
//"
//console.log(form)
useEffect(() => {
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIwOCwiaWF0IjoxNjY2NDg0ODc2fQ.gWaML0lTS-kjCmmbpXKaGocCNPgxgbXQIQp0P7AZaks"
const config ={
    headers: {
        Authorization: `Bearer ${token}`
    }
}
 const promise = axios.get(URL, config)

 promise.then((res)=> {
    console.log(res.data)})

    promise.catch((err) => {
    console.log(err.response.data)})
 

},[])

    return (<>
   <Header/>  
    <MyRoutines/>
   <StyleRoutines>
<StyleNotice><h4>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h4></StyleNotice>
    </StyleRoutines>
    </>)
}
const StyleRoutines = styled.div`
width:405px;
height:527px;
display:flex;
flex-direction:column;
background-color:green;
align-items:center;
`
const StyleNotice = styled.section`
height: 74px;
width: 338px;
left: 23px;
margin-top: 360px;
border-radius: nullpx;
h4{
    font-family: Lexend Deca;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color:#666666;
}
`
