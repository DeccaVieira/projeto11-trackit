import react from "react";
import { AuthContext } from "../../providers/auth";
import Header from "./Header";
import { useState } from "react";

export default function Routines() {
const {form, setForm} = react.useContext(AuthContext)

console.log(form);
    return (<>
   <Header/>
   <h1>{form.email}</h1>
   <input type="text" onChange={(e) => setForm(e.target.value)}/>
    </>)
}