import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../Logo"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login() {
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const navigate = useNavigate()

function loginApp(e) {
e.preventDEfault();

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const request = axios.post(URL ,{
        email:email,
        senha:senha
    })
    request.then(() => navigate("/habitos"))


}
    return (<StyleLogin>

    <Logo/>
    <StyleForm>
     <form action="/habitos">
		 <input type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
		  <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required/>
		  <button type="submit">Login</button>
		</form>
    </StyleForm>
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
const StyleForm = styled.div`
width: 303px;
heigth: 147px;
display:flex;
justify-content:center;
margin-left:36px;
input{
    width:303px;
    height:45px;
    margin-bottom:6px;
    border-radius:5px;
    border: 1px solid #D4D4D4
    
}
button{
    width:309px;
    height: 45px;
    background-color:#52B6FF;
    border-radius: 4.64px;
    border:none;
   

}
h2{
    font-family: Lexend Deca;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
color:#ffffff;     
}

`