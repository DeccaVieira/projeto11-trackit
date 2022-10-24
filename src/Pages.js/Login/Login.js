import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../Logo"
import axios from "axios"
import { AuthContext } from "../../providers/auth";
import { useNavigate } from "react-router-dom"
import react from "react"

export default function Login() {
    const { setToken, form, setForm, user, setUser } = react.useContext(AuthContext)
    const navigate = useNavigate()

    console.log(user)
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    function loginApp(Event) {
        Event.preventDefault();
    }

    function login() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promise = axios.post(URL, form)
        promise.then((res) => {
            setUser(res.data)
            setToken(res.data.token)
            navigate("/hoje")
        })

        promise.catch((err) => { alert(err.response.data.message) })
        console.log(form)
    }

    return (<StyleLogin>

        <Logo />
        <StyleForm>
            <form onSubmit={loginApp}>
                <input name="email"
                    value={form.email}
                    onChange={handleForm}
                    type="email" placeholder="email" required />
                <input name="password"
                    value={form.password}
                    onChange={handleForm}
                    type="password" placeholder="senha" required />
                <button onClick={login} type="submit">Login</button>
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
flex-direction:column;
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