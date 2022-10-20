import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../Logo"
import axios
 from "axios"
 import { useNavigate } from "react-router-dom"

export default function Registration() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [	name, setName] = useState("")
const [image, setImage] = useState("")
const navigate = useNavigate()

function registerUser(e){
    e.preventDefault()
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

const body = {
    email: email,
	name: name,
	image: image,
	password: password
}
const promise = axios.post(URL, body)

promise.then(() => {
    alert("Deu bom")
    navigate("/")
})

promise.catch((err) => {
    alert(err.response.data.message)
})
}

    return (<StyleRegistration>
    <Logo/>
    <StyleFormRegistration>
    <form onSubmit={registerUser}>
        <input 
         value={email}
         onChange={e => setEmail(e.target.value)}
        type="email" placeholder = "email" required/>
        <input 
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password" placeholder = "senha" required/>
        <input 
         value={name}
         onChange={e => setName(e.target.value)}
        type="text" placeholder = "nome" required/>
        <input 
         value={image}
         onChange={e => setImage(e.target.value)}
        type="url" placeholder = "foto" required/>
        <button type="submit"><h2>Cadastrar</h2></button>
    </form>
    </StyleFormRegistration>
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
const StyleFormRegistration =styled.div`
width: 303px;
height: 249px;
display:flex;
justify-content:center;
margin-left:36px;
input{
    width:303px;
    height:45px;
    margin-bottom:6px;
    border-radius:5px;
    border: 1px solid #D4D4D4;
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