import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import todo from '../images/Checklist-rafiki.svg';
import '../styles/Home.scss'

export default function Home() {
    return (
        <>
          <Navbar/>
          <div className="home-body">
            <div className="container">
              <div className="home-info">
              <h1>Elevate your life through <span>Gamification!</span>
              </h1>
              <p>An innovative game concept platform for to-do list tasks! 
              </p>
              <div className="home-btn">
                <button className="primary-btn-1">
                  <Link to="/Signup" className="btn-1">Try Now</Link>
                  </button>
                <button className="primary-btn-2">
                  <Link to="/About" className="btn-2">Open Source</Link>
                  </button>
              </div>
              </div>
              <div className="home-image">
                <img className="contain-image" src={todo} alt="todo"/>
              </div>
             
            </div>
          </div>
        </>
    )
}