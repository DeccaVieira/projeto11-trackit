import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Footer() {
    const navigate = useNavigate()

    return (<>
        <StyleFooter>
            <h2 data-identifier="habit-page-action" onClick={() => navigate("/habitos")}>Hábitos</h2>
            <h2 data-identifier="historic-page-action" onClick={() => navigate("/historico")}>Histórico</h2>
        </StyleFooter>
    </>)
}
const StyleFooter = styled.footer`
width:375px;
height: 70px;
background-color:#FFFFFF;
position:fixed;
left:0;
top:527px;
display:flex;
align-items:center;
justify-content:space-between;
h2{
    margin-left:31px;
margin-right:31px;
    font-family: Lexend Deca;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
    color: #52B6FF;
}
`