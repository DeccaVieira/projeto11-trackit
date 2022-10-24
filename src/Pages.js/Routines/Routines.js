import react, { useEffect } from "react";
import { AuthContext } from "../../providers/auth";
import Header from "./Header";
import { useState } from "react";
import styled from "styled-components"
import MyRoutines from "./MyRoutines"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export default function Routines() {
    const { form, setForm, token ,daysOfWeek} = react.useContext(AuthContext)
    const [routineList, setRoutineList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (token === "") {
            navigate("/")
        }
    }, [])

    useEffect(() => {

getRoutines()     


    }, [])

function getRoutines(){
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, config)

        promise.then((res) => {
            setRoutineList(res.data)
            console.log(routineList)
        })

        promise.catch((err) => {
            console.log(err.response.message)
        })
}
    function removeRoutines(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.delete(URL, config);


        promise.then((res) => getRoutines())

        promise.catch((err) => { alert(err.response.data.message) })
    }
    console.log(routineList)

    return (<>
        <Header />
        <MyRoutines />
        <StyleRoutines>
            <ul>
                {routineList.map((rlist) => <StyleRoutineList key={rlist.id} name={rlist.name} days={rlist.days}>
                    <h1>{rlist.name}</h1>
                    <Flex>{daysOfWeek.map((day) => 
                   
                    <Done key ={day.id}><h1>{day.name}</h1></Done> 
                  
                    ) }</Flex>
 <ion-icon name="trash-outline"onClick={() => removeRoutines(rlist.id)}></ion-icon>
                </StyleRoutineList>)}

            </ul>
            <StyleNotice><h4>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h4></StyleNotice>
        </StyleRoutines>
    </>)
}
const StyleRoutines = styled.div`
width:375px;
height:527px;
display:flex;
flex-direction:column;
background-color:#E5E5E5;
margin-bottom:10px;
align-items:center;
overflow-y: scroll;
`
const StyleNotice = styled.section`
height: 74px;
width: 338px;
left: 23px;
margin-top: 360px;
border-radius: nullpx;
h4{
    font-family: Lexend Deca;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color:#666666;
}
`
const StyleRoutineList = styled.li`
width: 340px;
height: 91px;
background-color: #FFFFFF;
margin-bottom:10px;
button{
border-radius: 5px;
margin-left:19px;
}
h1{
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
     color:#666666;
    
`
const Flex = styled.div`

display:flex;`

const Done = styled.div`
width:30px;
height:30px;
background-color:#FFFFFF;
border: 1px solid #E5E5E5 ;
border-radius:5px;
margin-left:4px;
display:flex;
justify-content:center;
align-items:center;
h1{
    font-family: Lexend Deca;
font-size: 20px;
font-weight: 400;
line-height: 25px;
color:#CFCFCF;

}
`
const NDone = styled.button`
width:30px;
height:30px;
background-color:#FFFFFF;
h1{
    font-family: Lexend Deca;
font-size: 20px;
font-weight: 400;
line-height: 25px;
color:#CFCFCF;
}
`
