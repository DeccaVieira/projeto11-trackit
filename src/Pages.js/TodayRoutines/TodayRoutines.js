import axios from "axios"
import { useState, useEffect} from "react"
import styled from "styled-components"
import Header from "../Routines/Header"
import { AuthContext } from "../../providers/auth";
import react from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export default function TodayRoutine() {
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [weekDay, setWeekDay] = useState("")


console.log(day)

    const {todayList,setTodayList,token, daysOfWeek} = react.useContext(AuthContext)
    console.log(dayjs().month())
    console.log(dayjs().date()) 
    console.log(dayjs().day())
    const navigate = useNavigate()

    useEffect(() => {
        if (token === "") {
            navigate("/")
        }
    }, []) 
    useEffect(() => {
     
getTodayRoutines()

    }, [])
    function getTodayRoutines(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, config)

        promise.then((res) => {
            setTodayList(res.data)
         setDay(dayjs().day())
         setWeekDay(dayjs().date())
         setMonth(dayjs().month())
        })

        promise.catch((err) => {
            console.log(err.response.data.message)
        })
    }

    function doneRoutine(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, {}, config);


        promise.then((res) =>  getTodayRoutines())

        promise.catch((err) => { alert(err.response.data.message) })
        
    }
    
    function removeRoutine(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, {}, config);


        promise.then((res) =>  getTodayRoutines())

        promise.catch((err) => { alert(err.response.data.message) })
       console.log(dayjs().date()) 
    }



    return (<Main>
        <Header />
        <DateToday><h2>{day}</h2><h2>{weekDay}</h2><h2>{month}</h2></DateToday>
        {todayList.map((t) => (<TodayRoutines key={t.id} done={t.done} currentSequence={t.currentSequence} highestSequence={t.highestSequence}>
            <Routine><h1>{t.name}</h1>
                <h3>Sequência atual: {t.currentSequence} dias</h3>
                <h3>Seu recorde: {t.highestSequence} dias</h3></Routine>
                
            {t.done === true ? <StyleDone><ion-icon name="checkbox-sharp" onClick={()=> removeRoutine(t.id)}></ion-icon></StyleDone> :
                <StyleND><ion-icon name="checkbox-sharp" onClick={()=> doneRoutine(t.id)}></ion-icon></StyleND>}
            

        </TodayRoutines>))}
    </Main>)
}
const Main = styled.main`
width:375px;
background-color:#E5E5E5;
`
const TodayRoutines = styled.div`
margin-top:60px;
width: 340px;
height:94px;
margin-left:18px;
background-color:#FFFFFF;
display:flex;
flex-direction:row;
align-items: space-between;
h1{
    font-family: Lexend Deca;
font-size: 20px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
color:#666666;
margin-bottom: 10px;
}
h3{
    font-family: Lexend Deca;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
color:#666666;     
}

`
const StyleDone = styled.div`
display:flex;
align-items:center;
width:79px;
margin-right: 13px;
ion-icon{
font-size: 80px;
color: #8FC549;
left:100px;
}
`
const StyleND = styled.div`
display:flex;
align-items:center;
width:79px;
margin-right: 13px;
ion-icon{
font-size: 80px;
color: 
#E7E7E7;
`
const DateToday = styled.span`
font-family: Lexend Deca;
font-size: 23px;
font-weight: 400;
color:#126BA5;
margin-top:70px;
display:flex;
`
const Routine = styled.div`
background-color:#FFFFFF;
width:380px;
padding-left:15px;
padding-top:15px
`