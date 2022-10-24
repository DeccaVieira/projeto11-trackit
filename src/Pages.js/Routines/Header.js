import styled from "styled-components"
import { AuthContext } from "../../providers/auth";
import react from "react";
import { useNavigate } from "react-router-dom";
export default function Header() {
    const {user, setUser} = react.useContext(AuthContext)
   const navigate = useNavigate()

    return(<Main>
    <StyleHeader>
    <h1 onClick={()=> navigate("/habitos")}>TrackIt</h1>
 <img src={user.image}/>
    </StyleHeader>
    </Main>)
}
const Main = styled.main`
width:375px;
`
const StyleHeader = styled.header`
height: 70px;
width: 375px;
left: 0px;
top: 0px;
background-color: #126BA5;
display:flex;
align-items:center;
justify-content:space-between;
position:fixed;
z-index:1;
img{
height: 51px;
width: 51px;
margin-right: 18px;
top: 9px;
border-radius: 98.5px;

}
h1{
    font-family: Playball;
font-size: 39px;
font-weight: 400;
line-height: 49px;
text-align: left;
color:#FFFFFF;
margin-left:18px;
}

`
