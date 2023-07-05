import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPersonFill, BsFillKeyFill, BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Auth.scss'

export default function Login() {
    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/Dashboard');
            }
        });

        return () => {
            unsub();
        };
    }, [navigate]);

    async function login() {
        try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword );
        console.log(user)
        } catch(error) {
            console.log(error.message);
        }
    }
   
    return (
        <>
            <Navbar />

            <section className="login-page">
                <div className="box-container-1">
                    <div className="login-box">
                        <h3>Login</h3>
                        <div className="form-group">
                            <BsFillPersonFill className="input-icon" />
                            <input 
                            type="text" 
                            autocomplete="off" 
                            id="email" 
                            placeholder="Email"
                            onChange={(event) => {setLoginEmail(event.target.value);}} />
                        </div>
                        <div className="form-group">
                            <BsFillKeyFill className="input-icon" />
                            <input 
                            type="text" 
                            id="password" 
                            placeholder="Password"
                            onChange={(event) => {setLoginPassword(event.target.value);}}  />
                        </div>
                        <button className="login-btn" 
                        onClick={login}>Login</button>
                        <h5>Don't have an account? <Link to="/Signup" className="direct-auth">Get Started</Link></h5>
                        <div className="end-2">
                            <div></div>
                        </div>
                        <p>Or continue with</p>
                        
                        <button className="login-fb"><BsFacebook className="auth-icons"/>Login with Facebook</button>
                        <button className="login-google"><FcGoogle className="auth-icons"/>Login with Google</button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}