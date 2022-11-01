import PrimaryButton from "../Buttons/PrimaryButton";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Input({ handleChange, state, setState}){

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            console.log(response.data)
            // navigate("/")
        }).catch((error) => {
            console.log(error)
        })
      };
    

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="submitForm">
            <div className="title">
                <h3>Title</h3> 
                <input className="black" type="text" onChange={handleChange}   {...register("title", { required: true })} />
            </div>
            <div className="description">
                <h3>Description</h3>
                <textarea rows={4} onChange={handleChange}  {...register("description", { required: true })} />
            </div>
           
            <div className="price">
                <h3>Price</h3>
                <div className="d-flex">
                <select name="currency"  onChange={handleChange}  {...register("currency")}>
                <option value="euro">Eur</option>
                <option value="dodge">DodgeCoin</option>
                <option value="bitcoin">Bitcoin</option>
                </select>
                <input type="number" onChange={handleChange}  {...register("price", { required: true })} />
                </div>
            </div>
            <div className="category">
                <h3>Category</h3>
                <select name="category"  onChange={handleChange}  {...register("category", { required: true })}>
                <option value="electric">Electric</option>
                <option value="home">Home</option>
                <option value="service">Service</option>
                </select>
            </div>
            <div className="condition">
                <h3>Condition</h3>
                <select name="condition"  onChange={handleChange}  {...register("category", { required: true })} >
                <option value="used">Used</option>
                <option value="new">new</option>
                </select>
            </div>
            <div className="location">
                <h3>Location</h3>
                <input type="number" maxLength="5" placeholder="Enter PLZ"  {...register("location", { required: true })} onChange={handleChange}/>
            </div>
            <div className="upload">
                <h3>Upload picture</h3>
                <input type="file" accept="image/*" />
            </div> 
            <PrimaryButton onClick={handleSubmit(onSubmit)}>Post your listing</PrimaryButton>
        </form> 
       
        
    )
}