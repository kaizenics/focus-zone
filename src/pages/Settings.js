
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import SideNavbar from "../components/SideNavbar";
import '../styles/Settings.scss'

export default function Settings() {
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await auth.signOut();
            alert("You've been Logged out!");
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="settings-container">
                <SideNavbar />
                <div className="settings-page">
                    <div className="set-test-button">
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
