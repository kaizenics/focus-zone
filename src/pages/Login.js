import { Link } from 'react-router-dom';
import { BsFillPersonFill, BsFillKeyFill, BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Auth.scss'

export default function Login() {
    return (
        <>
            <Navbar />

            <section className="login-page">
                <div className="box-container-1">
                    <div className="login-box">
                        <h3>Login</h3>
                        <div className="form-group">
                            <BsFillPersonFill className="input-icon" />
                            <input type="text" autocomplete="off" id="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <BsFillKeyFill className="input-icon" />
                            <input type="text" id="password" placeholder="Password" />
                        </div>
                        <button className="login-btn">Login</button>
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