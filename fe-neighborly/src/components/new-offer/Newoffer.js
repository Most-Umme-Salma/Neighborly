 import "./style/newOffer.css";
 import Input from "./Input";
 import Summary from "./Summary";
 import {useState} from "react";

export default function Newoffer({}){
    const [state, setState] = useState({
        title: "",
        desc: "",
        price: "",
        category: "",
        condition:"",
        location: "",
        currency: ""
    });
    


    const handleChange =(e)=>{
        const {name, value} = e.target;
        console.log({name, value})
        setState({name, value})
    }

    const handleSubmit =(e)=>{
        console.log("you submited")
        e.preventDefault();
       
    }
    
    
    return(
    <div className="newoffer">
         <Input handleSubmit={handleSubmit} handleChange={handleChange} state={state} setState={setState} />
         <Summary /> {}
    </div>)
}