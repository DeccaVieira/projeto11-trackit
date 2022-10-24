import Header from "./Routines/Header";
import styled from "styled-components";
import Footer from "./Footer";

export default function Historic() {

    return(<>
    <Header/>
<StyleHistoric>
    <h2>Histórico</h2>
    <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
</StyleHistoric>
<Footer/>
    </>)
}
const StyleHistoric = styled.div`
width:375px;
height:527px;
background-color: #E5E5E5;
margin-top:70px;
h2{
    margin-top:48px;
    margin-left: 17px;
    font-family: Lexend Deca;
font-size: 23px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color:#126BA5;
}
h3{
    margin-top:18px;
    margin-left: 17px;
    height: 74px;
width: 338px;
left: 15px;
top: 144px;
border-radius: nullpx;
color:#666666;
}
`