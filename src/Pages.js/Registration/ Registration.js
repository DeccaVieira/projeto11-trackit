import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../Logo"
import FormRegistration from "./FormRegistration"
export default function Registration() {

    return (<StyleRegistration>
    <Logo/>
    <FormRegistration/>
    <Link to="/">
    <StyleLink><u><h3>Já tem uma conta? Faça login!</h3></u></StyleLink>
    </Link>
    </StyleRegistration>)
}
const StyleRegistration = styled.main`
width: 375px;
height: 667px;
background-color:#FFFFFF;
display:flex;
flex-direction:column;
border-style: solid;
`
const StyleLink = styled.div`
h3{
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #52B6FF;
    margin-top:40px;
}
u{
    color: #52B6FF;  
}
`