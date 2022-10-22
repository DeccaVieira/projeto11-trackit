import react from "react";
import { AuthContext } from "../../providers/auth";
import Header from "./Header";
import { useState } from "react";
import styled from "styled-components"
import MyRoutines from "./MyRoutines"

export default function Routines() {
const {form, setForm} = react.useContext(AuthContext)

console.log(form), "teste";
    return (<>
   <Header/>
   <StyleRoutines>  
    <MyRoutines/>
   </StyleRoutines>

    </>)
}
const StyleRoutines = styled.main`
width:375px;
display:flex;
flex-direction:column;
align-items:center;
background-color:green;
`
