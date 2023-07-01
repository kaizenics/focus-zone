import { Link } from 'react-router-dom';
import { BsHouseDoor, BsPerson, BsGear } from 'react-icons/bs';
import icon from '../images/fz-icon.png';
import '../styles/Sidebar.scss';

export default function SideNavbar() {
  return (
    <div className="sidebar-container">
     <nav className="side-navbar">
      <div className="home-title">
        <img src={icon} className="side-icon" alt="Icon" />
        <p>Focus<span>Zone</span></p>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/Dashboard">
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
    </nav>
    </div>
  );
}
