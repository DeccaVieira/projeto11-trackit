import styled from "styled-components"
import logo from "../src/assets/images/logo.svg"
export default function Logo() {
    return (<>
    <StyleLogo src={logo}/>
    </>)
}
const StyleLogo = styled.img`
height: 178.38323974609375px;
width: 180px;
margin-left: 97px;
margin-top: 68px;
`