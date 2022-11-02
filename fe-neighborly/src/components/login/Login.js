import { useRef, useState, useEffect } from 'react';
import axios from "axios";
import "./LoginLayout.css"
import PrimaryButton from "../Buttons/PrimaryButton"


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
            try {
                const response = await axios.post("http://localhost:3001/auth/login",
                    { email: user, password: pwd },
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                const accessToken = response?.data?.accessToken;
                const roles = response?.data?.roles;
                // setUser(""),
                // setPwd(""),
                setSuccess(true)
                console.log(response)

                } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 400) {
                    setErrMsg('Missing Username or Password');
                } else if (err.response?.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
                errRef.current.focus();
            }}


    return (
        <>
            {success ? window.location.replace("/") : (
                <div className='LoginPageParentContainer'>
                <section className='LoginPageLeft' >
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit} className="form-wrapper">
                        <div id='usernameField'>
                            <input
                                type="text"
                                id="username"
                                placeholder='Enter Username'
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                className='login-input'
                            />
                        </div>
                        <div id='passwordField'>
                            <input
                                type="password"
                                id="password"
                                placeholder='Enter Password'
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                className='login-input'
                            />
                        </div>
                        <div id='rememberBox'>
                            <input type="checkbox" id="remember" name="remember" value="remember" />
                                <label htmlFor="remember">Remember</label>
                            <a href='/'>Forgot password</a>
                        </div>
                        <div id='ButtonLogin'>
                            <PrimaryButton text="Sign in" className="w-100"/>
                        </div>
                    </form>

                    <p id="signupField">
                        Need an Account?<br />
                        <span className="line">
                            <a href="/signup">Sign Up</a>
                        </span>
                    </p>
                </section>
                <div className='LoginPageRight'>
                </div>
            </div>
            )}
        </>
    )
}


export default Login