import SideNavbar from '../components/SideNavbar';
import '../styles/Home.scss';
import { LiaUserCircleSolid } from 'react-icons/lia';

export default function Home() {
  return (
    <>
    
     <div className="dashboard-container">
       <SideNavbar/>
       <div className="dashboard-page">
        <section className="user-page">
            <div className="profile-icon">
                <LiaUserCircleSolid/>
            </div>
            <h3>Sample Text</h3>
            <p>Lorem ipsum charot charot</p>
        </section>
        
        <section className="task-page">
            <div className="profile-icon">
                <LiaUserCircleSolid/>
            </div>
            <h3>Sample Text</h3>
            <p>Lorem ipsum charot charot</p>
        </section>
      </div>
     </div>
    </>
  );
}
