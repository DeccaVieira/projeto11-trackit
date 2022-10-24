import styled from "styled-components"
import react from "react"
import { AuthContext } from "../../providers/auth";
import FormMyRoutines from "./FormMyRoutines";


export default function MyRoutines() {
    const { routine, setRoutine} = react.useContext(AuthContext)


    return (<>
        <StyleMyRoutines>

            <h1>Meus hábitos</h1>
            <button data-identifier="create-habit-btn" onClick={(() => setRoutine(true))}><h2>+</h2></button>
            {routine === true &&
                <FormMyRoutines />}

        </StyleMyRoutines>

    </>)
}
const StyleMyRoutines = styled.section`
height: 85px;
width: 375px;
left: 0px;
margin-top: 70px;
display:flex;
align-items:center;
justify-content:space-between;
background-color:#E5E5E5;
position:relative;
h1{
    margin-left: 17px;
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