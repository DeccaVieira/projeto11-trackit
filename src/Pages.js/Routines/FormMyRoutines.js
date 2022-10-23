import styled from "styled-components"
import react from "react"
import { AuthContext } from "../../providers/auth";
import daysOfWeek from "./daysOfWeek"

export default function FormMyRoutines() {
    const {routine, setRoutine, routines, setRoutines} = react.useContext(AuthContext)
console.log(daysOfWeek)

    return(<StyleFormMyRoutines>
<input></input>  
{daysOfWeek.map((day) => <StyleUL><li><h2>{day.name} </h2></li>
    </StyleUL>)}
    
<span onClick={(()=> setRoutine(false))}>Cancelar</span>
<button><h3>Salvar</h3></button>

  
    </StyleFormMyRoutines>)
}
const StyleFormMyRoutines = styled.div`
width: 340px;
height: 180px;
border-radius:5px;
margin-top:266px;
margin-left:18px;
margin-right:18px;
background-color:red;

display:flex;
flex-direction:column;
input{
height: 45px;
width: 303px;
margin-left: 19px;
margin-top: 18px;
border-radius: 5px;
border:none;
}
button{
height:35px;
width:84px;
left:240px;
top: 127px;
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
    margin-left:140px;
    margin-top: px;

top: 127px;
}

`
const StyleUL = styled.ul`
    display:flex;
    flex-direction:row;
    li{
        width:30px;
        height:30px;
        background-color: lightblue;
    }
`