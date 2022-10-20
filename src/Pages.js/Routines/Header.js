import styled from "styled-components"

export default function Header() {

    return(<StyleHeader>
    <h1>TrackIt</h1>
  
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
img{
    height: 51px;
width: 51px;
left: 306px;
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
