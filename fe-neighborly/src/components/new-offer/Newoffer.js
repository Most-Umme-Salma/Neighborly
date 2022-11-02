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
        currency: "",
    });

    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Image');
    const [uploadedFile, setUploadedFile] = useState({});
    const [preview, setPreview] = useState("")

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

    const handleFile = (e) => {
        const selectedFile = e.target.files[0]
        const filePreview = URL.createObjectURL(selectedFile);
        setFile(selectedFile);
        setFileName(e.target.files[0].name);
        console.log('File Preview ' + filePreview)
        setPreview(filePreview);
    }
   
    
    return(
    <div className="newoffer">
         <Input handleSubmit={handleSubmit} handleChange={handleChange} state={state} setState={setState} file={file} fileName={fileName} handleFile={handleFile} uploadedFile={uploadedFile} setUploadedFile={setUploadedFile}/>
         <Summary state={state} setState={setState} file={file} preview={preview}/>
    </div>)
}