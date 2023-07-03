import { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import SideNavbar from '../components/SideNavbar';
import '../styles/Dashboard.scss';
import icon from '../images/8bit-shark.jpg';

export default function Dashboard() {
  const [modalPop, setModalPop] = useState(false);

  const openModal = () => {
    setModalPop(true);
  }

  const closeModal = () => {
    setModalPop(false);
  }

  return (
    <>
      <div className="dashboard-container">
        <SideNavbar />
        <div className="dashboard-page">
          <section className="user-page">
            <div className="user-icon">
              <div className="u-icon">
                <img src={icon} alt='' />
              </div>
            </div>
            <div className="user-info">
              <h3>Niko Soriano</h3>
              <p>@kaizenics</p>
              <p>Level 100 • Prowess</p>
              <div className="progress-bar-1">
                <div className="progress-1"></div>
              </div>
              <div className="progress-bar-2">
                <div className="progress-2"></div>
              </div>
            </div>
          </section>

          <section className="task-page">
            <div className="task-info">
              <div className="task-controls">
                <input type="text" className="search-bar" placeholder="Search tasks" />
                <button className="search-btn">
                  <FaSearch className="fa-icon"/>Search</button>
                <button className="add-task-btn" onClick={openModal}>
                  <FaPlus className="fa-icon"/>Add Task</button>
              </div>
            </div>
          </section>


        </div>
      </div>

      {modalPop && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Task</h2>
            <p> hello hello</p>
            <button className="close-modal-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
