import "./style/newOffer.css";
 import Input from "./Input";
 import Summary from "./Summary";
 import {useState} from "react";

export default function Newoffer({}){
    const [state, setState] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        condition: "",
        location: "",
        currency: ""
    });
    


    const handleChange =(e)=>{
        const {name, value} = e.target;
        
        const copy = {...state};
            copy[name] = value;
            setState(copy);
            console.log(copy)
    }

    const handleSubmit =(e)=>{
        console.log("you submited")
        e.preventDefault();
       
    }
   
    
    return(
    <div className="newoffer">
         <Input handleSubmit={handleSubmit} handleChange={handleChange} state={state} setState={setState} />
         <Summary state={state} setState={setState} /> {}
    </div>)
}