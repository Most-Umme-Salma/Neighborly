 import "./style/newOffer.css";
 import Input from "./Input";
 import Summary from "./Summary";
 import {useState} from "react";

export default function Newoffer({}){
    const [title, setTitle] = useState([]);
    const [aux, setAux] = useState();


    const handleChange =(e)=>{
        //console.log(e.target.value)
        setTitle(e.target.value)
       
    }

    const handleSubmit =(e)=>{
        console.log("you submited")
        e.preventDefault();
        setAux(title)
    }
    
    
    return(
    <div className="newoffer">
         <Input handleSubmit={handleSubmit} handleChange={handleChange} title={title} />
         <Summary /> {console.log(title)}
    </div>)
}