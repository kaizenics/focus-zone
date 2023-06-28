import { Link } from 'react-router-dom';
import { BsHouseDoor, BsPerson, BsGear } from 'react-icons/bs';
import icon from '../images/fz-icon.png'
import '../styles/Sidebar.scss';

export default function SideNavbar() {

  return (
    <nav className="home-navbar">
      <div className="sidebar">
        <div className="profile-section">
          <img src={icon} className="side-icon"/>
          <p>Focus<span>Zone</span></p>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/Home">
              <BsHouseDoor className="sidebar-icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Profile">
              <BsPerson className="sidebar-icon" />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/Settings">
              <BsGear className="sidebar-icon" />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
