import styled from "styled-components"
export default function Form() {
    return (<StyleForm>
     <form>
		  <input type="email" placeholder="email" required/>
		  <input type="password" placeholder="senha" required/>
		  <button type="submit"><h2>Entrar</h2></button>
		</form>
    </StyleForm>)
}
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