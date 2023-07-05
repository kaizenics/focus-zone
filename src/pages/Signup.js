import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'
import { Link } from 'react-router-dom';
import { BsFillPersonFill, BsFillKeyFill, BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Auth.scss'

export default function Login() {
    const [signUpEmail, setSignUpEmail] = useState();
    const [signUpPassword, setSignUpPassword] = useState();

    async function signup() {
        try {
            const user = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
            console.log(user);
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />

            <section className="login-page">
                <div className="box-container-2">
                    <div className="login-box">
                        <h3>Sign up</h3>
                        <div className="form-group">
                            <BsFillPersonFill className="input-icon" />
                            <input 
                            type="text" 
                            autocomplete="off" 
                            id="email" 
                            placeholder="Email"
                            onChange={(event) => {setSignUpEmail(event.target.value);}} />
                        </div>
                        <div className="form-group">
                            <BsFillKeyFill className="input-icon" />
                            <input 
                            type="text" 
                            id="password" 
                            placeholder="Password" 
                            onChange={(event) => {setSignUpPassword(event.target.value);}}
                            />
                        </div>
                        <div className="form-group">
                            <BsFillKeyFill className="input-icon" />
                            <input type="text" id="confirm-password" placeholder="Confirm Password" />
                        </div>
                        <button className="login-btn"
                        onClick={signup}>Sign up</button>
                        <h5>Already have an account? <Link to="/Login" className="direct-auth">Log in</Link></h5>
                        <div className="end-2">
                            <div></div>
                        </div>
                        <p>Or continue with</p>
                        
                        <button className="login-fb"><BsFacebook className="auth-icons"/>Sign up with Facebook</button>
                        <button className="login-google"><FcGoogle className="auth-icons"/>Sign up with Google</button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}