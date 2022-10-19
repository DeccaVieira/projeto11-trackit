import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../Logo"
import Form from "./Form"
export default function Login() {

    return (<StyleLogin>

    <Logo/>
   <Form/>
   <Link to="/cadastro">
   <StyleLink><u><h3>Não tem uma conta? Cadastre-se!</h3></u></StyleLink>
   </Link>
    </StyleLogin>)
}
const StyleLogin = styled.main`
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
    margin-top:25px;
}
u{
    color: #52B6FF;  
}
` 
