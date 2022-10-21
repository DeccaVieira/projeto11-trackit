import styled from "styled-components"
import { AuthContext } from "../../providers/auth";
import react from "react";
export default function Header() {
    const {user, setUser} = react.useContext(AuthContext)
   console.log(user);
    return(<StyleHeader>
    <h1>TrackIt</h1>
 <img src={user.image}/>
    </StyleHeader>)
}
const StyleHeader = styled.header`
height: 70px;
width: 375px;
left: 0px;
top: 0px;
background-color: #126BA5;
display:flex;
align-items:center;
padding-left:18px;
padding-right: 18px;
justify-content:space-between;
img{
height: 51px;
width: 51px;
right: 3px;
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
}

`
