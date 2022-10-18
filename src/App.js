
import GlobalStyle from "./assets/styles/GlobalStyle" 
import Registration from "./Pages.js/Registration/ Registration"
import Login from "./Pages.js/Login/Login"
import Routines from "./Pages.js/Routines/Routines"
import TodayRoutines from "./Pages.js/TodayRoutines/TodayRoutines"
import { BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {

    return (<><BrowserRouter>
    <GlobalStyle/>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="cadastro" element={<Registration/>}/>
<Route path="habitos" element={<Routines/>}/>
<Route path="hoje" element={<TodayRoutines/>}/>
</Routes>
    </BrowserRouter>
    </>)
}