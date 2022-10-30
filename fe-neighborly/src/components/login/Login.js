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
                const response = await axios.post("http://localhost:3000/login",
                    { username: user, password: pwd },
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                const accessToken = response?.data?.accessToken;
                const roles = response?.data?.roles;
                //setUser(""),
                //setPwd(""),
                setSuccess(true)

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
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Home</a>
                    </p>
                </section>
            ) : (
                <div className='LoginPageParentContainer'>
                <section className='LoginPageLeft'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div id='usernameField'>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                placeholder='Enter Username'
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                        </div>
                        <div id='passwordField'>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                placeholder='Enter Password'
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                        </div>
                        <div id='rememberBox'>
                            <input type="checkbox" id="remember" name="remember" value="remember" />
                                <label htmlFor="remember">Remember</label>
                            <a href='/'>Forgot password</a>
                        </div>
                        <div id='Button'>
                        <PrimaryButton text="Sign in"/>
                        </div>
                    </form>

                    <p id="signupField">
                        Need an Account?<br />
                        <span className="line">
                            {/*router link*/}
                            <a href="#">Sign Up</a>
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