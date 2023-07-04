import { useState } from 'react';
import { FaPlus, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import SideNavbar from '../components/SideNavbar';
import '../styles/Dashboard.scss';
import icon from '../images/8bit-shark.jpg';

export default function Dashboard() {
  const [modalPop, setModalPop] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [taskType, setTaskType] = useState();

  function openModal() {
    setModalPop(true);
  }

  function closeModal() {
    setModalPop(false);
    setTimeout(() => {
      setModalPop(false);
    }, 300);
  }

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleTaskTypeChange(event) {
    setTaskType(event.target.value);
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
                  <FaSearch className="fa-icon" />Search</button>
                <button className="add-task-btn" onClick={openModal}>
                  <FaPlus className="fa-icon" />Add Task</button>
              </div>
            </div>

            <div className="task-lists">

              <div className="task-col">
                <div className="task-title">
                  <p>Add a Habits/Dailies</p>
                </div>
                <div className="task-box">
                  <p></p>
                </div>
              </div>


              <div className="task-col">
                <div className="task-title">
                  <p>Add a To-Do's</p>
                </div>
                <div className="task-box">
                  <p></p>
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>

      {modalPop && (
        <div className="modal-overlay">
          <div className="modal slide-down">
            <div className="modal-add-task">
              <div className="modal-container-1">
                <p>Create Task</p>
                <div className="modal-btn">
                  <button className="close-modal-btn" onClick={closeModal}>
                    Cancel
                  </button>
                  <button className="create-task-btn">
                    Create
                  </button>
                </div>
              </div>
              <div className="modal-container-2">
                <p>Title</p>
                <input type="text" className="modal-task-title" placeholder="Add a Title" />
                <p>Notes</p>
                <textarea className="modal-task-notes" placeholder="Add a Note" />
              </div>
            </div>
            <div className="modal-task-opt">
              <div className="modal-checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="taskType"
                    value="dailies"
                    checked={taskType === 'dailies'}
                    onChange={handleTaskTypeChange}/>
                  Habits/Dailies
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="taskType"
                    value="todo"
                    checked={taskType === 'todo'}
                    onChange={handleTaskTypeChange} />
                  To-Do
                </label>
              </div>
              <div className="modal-datepicker">
                <p>Dute Date</p>
                <div className="customDatePicker">
                  <DatePicker
                    id="dueDate"
                    selected={selectedDate}
                    onChange={handleDateChange}
                     wrapperclassName="datePicker"
                    placeholderText="mm/dd/yyyy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
