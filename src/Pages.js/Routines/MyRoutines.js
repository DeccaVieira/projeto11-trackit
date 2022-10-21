import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function MyRoutines() {
    const [routine, setRoutine] = useState({name:"", days:[]})

    function addRoutine(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.post(URL, routine);

        promise.then((res) => {
            console.log(res.data);
        })
        
        promise.catch((err) => {
            alert(err.response.data.message)
        })

    }
    //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIwOCwiaWF0IjoxNjY2MzEyNDYyfQ.NKyWa0PL39kNXjXGDbGrxiJ8WC1MxPfLzLEaDxX3gpQ"
    return (<>
    <StyleMyRoutines><h1>Meus hábitos</h1>
    <button onClick={addRoutine}><h2>+</h2></button>
    </StyleMyRoutines>
    </>)
}
const StyleMyRoutines = styled.section`
width: 338px;
height:85px;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
background-color:orange;

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
border:none;
border-radius: 4.64px;
 }
 h2{
    font-family: Lexend Deca;
font-size: 27px;
font-weight: 400;
color:#ffffff;
 }
`