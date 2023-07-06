import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase-config'
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPersonFill, BsFillKeyFill, BsFacebook, BsFillEnvelopeFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Auth.scss'

export default function Login() {
    const [signUpEmail, setSignUpEmail] = useState();
    const [signUpPassword, setSignUpPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [newDisplayName, setNewDisplayName] = useState();
    const navigate = useNavigate();

    async function handleSignUp() {
        if (signUpPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
            console.log(user);

            await updateProfile(auth.currentUser, { displayName: newDisplayName });

            const confirms = window.confirm("Sign-up Sucessful! Do you want to login directly?");
            if (confirms) {
            navigate('/Login');
            }
        } catch(error) {
            console.log(error);
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
                                autoComplete="off" 
                                id="email" 
                                placeholder="Display Name"
                                value={newDisplayName}
                                onChange={(event) => {setNewDisplayName(event.target.value);}}
                            />
                        </div>
                        <div className="form-group">
                            <BsFillEnvelopeFill className="input-icon" />
                            <input 
                                type="text" 
                                autoComplete="off" 
                                id="email" 
                                placeholder="Email"
                                value={signUpEmail}
                                onChange={(event) => {setSignUpEmail(event.target.value);}} 
                            />
                        </div>
                        <div className="form-group">
                            <BsFillKeyFill className="input-icon" />
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Password" 
                                value={signUpPassword}
                                onChange={(event) => {setSignUpPassword(event.target.value);}}
                            />
                        </div>
                        <div className="form-group">
                            <BsFillKeyFill className="input-icon" />
                            <input 
                                type="password" 
                                id="confirm-password" 
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(event) => {setConfirmPassword(event.target.value);}} 
                            />
                        </div>
                        <button className="login-btn" onClick={handleSignUp}>Sign up</button>
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
