import styled from "styled-components"
import react from "react"
import { AuthContext } from "../../providers/auth";
import { useState } from "react";
import axios from "axios";

export default function FormMyRoutines(props) {
    const { setRoutine, name, setName, daysOfWeek, token } = react.useContext(AuthContext)
    const [days, setDays] = useState([])



    function handleInput(e) {
        setName(e.target.value)
    }

    function handleDays(id) {
        
        if (days.includes(id)) {
            setDays(days.filter(day => day !== id))

        } else {
            setDays([...days, id])

        }

    }

    function addRoutine() {
        const body = {
            name: name,
            days: days
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, body, config);

        promise.then((res) => {
            console.log(res.data);

        })

        promise.catch((err) => {
            alert(err.response.data.message)
        })

    }

    return (<StyleFormMyRoutines>
        <input data-identifier="input-habit-name" name="name" value={name} onChange={handleInput} />
        <StyleUl>

            {daysOfWeek.map((d) => <StyleDaysOfWeek data-identifier="week-day-btn" key={d.id} days={d.name} onClick={() => handleDays(d.id)}>
                {d.name}
            </StyleDaysOfWeek>)}

        </StyleUl>

        <div onClick={(() => setRoutine(false))}><span>Cancelar</span></div>
        <button onClick={addRoutine}><h3>Salvar</h3></button>


    </StyleFormMyRoutines>)


}
const StyleFormMyRoutines = styled.div`
width: 340px;
height: 180px;
border-radius:5px;
margin-top:266px;
margin-left:-65px;
margin-right:18px;
background-color:#FFFFFF;
display:flex;
flex-direction:column;

input{
height: 45px;
width: 303px;
margin-left: 19px;
margin-right:18px;
margin-top: 18px;
border-radius: 5px;
border:1px solid #D4D4D4;
}
button{
height:35px;
width:84px;
left:250px;
top: 227px;
border-radius: 5px;
background-color: #52B6FF;

}
h3{
    font-family: Lexend Deca;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color:#FFFFFF;
}
span{
    width: 69px;
    font-family: Lexend Deca;
    font-size: 16px;
    font-weight: 400;
    color:#52B6FF;
margin-left:110px;
    margin-top: 197px;
}

`
const StyleUl = styled.div`
    display:flex;
    flex-direction:row;
    width:234px;
    align-items:center;
    margin-left:19px;
    margin-top:8px;
`
const StyleDaysOfWeek = styled.div`
height: 30px;
width: 30px;
border-radius: 5px;
background-color:#FFFFFF;
display:flex;
justify-content:center;
align-items:center;
margin-right: 4px;
color:#D4D4D4;
border: 1px solid #D4D4D4;
`