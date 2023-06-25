import { Link } from 'react-router-dom'
import { BsGithub, BsQuestionCircle, BsCodeSlash, BsChatLeftHeart } from 'react-icons/bs';
import { MdArrowRightAlt } from 'react-icons/md';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import todo from '../images/Checklist-rafiki.svg';
import '../styles/Landing.scss'

export default function Landing() {

  return (
    <>
      <Navbar />

      <div className="home-body">
        <section className="container-1">
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
                <Link to="/About" className="btn-2">Open Source <BsGithub className="icons-1" /></Link>
              </button>
            </div>
          </div>
          <div className="home-image">
            <img className="contain-image" src={todo} alt="todo" />
          </div>
        </section>

        <section className="container-2">
          <div className="col">
            <div className="box">
              <BsQuestionCircle className="box-icon" />
              <h1>Focus Zone Platform</h1>
              <p>Know more about Focus Zone!</p>
              <div className="box-button">
                <Link to="/About" className="box-btn-1">About</Link>
              </div>
              <MdArrowRightAlt className="box-icon-2" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <BsChatLeftHeart className="box-icon" />
              <h1>Message me</h1>
              <p>Reach me out in my available platforms!</p>
              <div className="box-button">
                <Link to="/" className="box-btn-1">Facebook Page</Link>
              </div>
              <MdArrowRightAlt className="box-icon-2" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <BsCodeSlash className="box-icon" />
              <h1>Open Source</h1>
              <p>Contribute, report bugs, and request features!</p>
              <div className="box-button">
                <Link to="/" className="box-btn-1">Github Repo</Link>
              </div>
              <MdArrowRightAlt className="box-icon-2" />
            </div>
          </div>
        </section>

        <Footer />

      </div>
    </>
  )
}