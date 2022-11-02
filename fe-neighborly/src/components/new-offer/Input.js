import PrimaryButton from "../Buttons/PrimaryButton";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Input({ handleChange, file, setUploadedFile, handleFile}){

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit =  (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            console.log(response.data)
            // navigate("/")
        }).catch((error) => {
            console.log(error)
        })

        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const {fileName, filePath } = res.data;

            setUploadedFile({fileName, filePath})
        } catch(err){
            if (err.response.status === 500) {
                console.log('you got a 500')
            }
            if (err.response.status === 400) {
                console.log('you got a 400')
            }
        }
      };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="submitForm">
            <div className="title-new-offer">
                <h3>Title</h3> 
                <input className="p-8 w-100" type="text" {...register("title", {onChange: handleChange})} />
            </div>
            <div className="description">
                <h3>Description</h3>
                <textarea rows={4} {...register("description", {onChange: handleChange})} className="p-8 w-100" />
            </div>
           
            <div className="price-new-offer">
                <h3>Price</h3>
                <div className="d-flex">
                <select name="currency" {...register("currency", {onChange: handleChange})} className="p-8 w-100" >
                <option value="euro">Eur</option>
                <option value="dodge">DodgeCoin</option>
                <option value="bitcoin">Bitcoin</option>
                </select>
                <input type="number" {...register("price", {onChange: handleChange})} className="p-8 w-100" />
                </div>
            </div>
            <div className="category">
                <h3>Category</h3>
                <select name="category" {...register("category", {onChange: handleChange})} className="p-8 w-100">
                <option value="electric">Electric</option>
                <option value="home">Home</option>
                <option value="service">Service</option>
                </select>
            </div>
            <div className="condition">
                <h3>Condition</h3>
                <select name="condition" {...register("condition", {onChange: handleChange})} className="p-8 w-100" >
                <option value="Used">Used</option>
                <option value="New">New</option>
                </select>
            </div>
            <div className="location">
                <h3>Location</h3>
                <input type="number" maxLength="5" placeholder="Enter PLZ" {...register("lcoation", {onChange: handleChange})} className="p-8 w-100" />
            </div>
            <div className="upload">
                <h3>Upload Image</h3>
                <input type="file" accept="image/*" {...register("img", {onChange: handleFile})} className="p-8 w-100"/>
            </div> 
            <PrimaryButton onClick={handleSubmit(onSubmit)} text="Post your listing"/>
        </form> 
       
        
    )
}