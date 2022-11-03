import { useForm } from "react-hook-form";
import axios from "../../axiosClient";
import { useNavigate } from "react-router-dom";
import "./RegisterStyling.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    axios.post("/auth/signup", data).then((response) => {
        console.log(response.data)
        navigate("/")
    }).catch((error) => {
        console.log(error)
    })

  };

  return (
    <div className="RegisterParentContainer">
      <div className="RegisterLeft"></div>
      <section className="RegisterRight">
        <h2 className="signupHeading bold">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
          <input
            className="signup-input"
            id="usernameRegister"
            placeholder="Name"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <input
            className="signup-input"
            id="emailRegister"
            placeholder="Email"
            type="email"
            {...register("email", { required: true, minLength: 8 })}
          />
          {errors.email && <span>This field is required</span>}

          <input
            className="signup-input"
            id="passwordRegister"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <span>This field is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span>Password must be at least 8 caracters long</span>
          )}
          <input id="ButtonRegister" type="submit" className="max-width" />
        </form>
      </section>
    </div>
  );
}
