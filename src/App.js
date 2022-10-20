
import GlobalStyle from "./assets/styles/GlobalStyle" 
import Registration from "./Pages.js/Registration/ Registration"
import Login from "./Pages.js/Login/Login"
import Routines from "./Pages.js/Routines/Routines"
import TodayRoutines from "./Pages.js/TodayRoutines/TodayRoutines"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"


export default function App() {
const [image, setImage] = useState("")
    return (<><BrowserRouter>
    <GlobalStyle/>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="cadastro" element={<Registration setImage={setImage}/>}/>
<Route path="habitos" element={<Routines image={image}/>}/>
<Route path="hoje" element={<TodayRoutines image={image}/>}/>
</Routes>
    </BrowserRouter>
    </>)
}