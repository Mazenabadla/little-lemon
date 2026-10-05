/*import { useState } from 'react';
import './Reservation.css';

/* global submitAPI */
export default function Reservation({ availableTimes, dispatch, onClose, openModal, onReserveClick }) {

  const [inputData, setInputData] = useState({ name: '', persons: '', date: '', time: '' });
  const [submittedData, setSubmittedData] = useState([]);





  /* global submitAPI */


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(inputData);


  }







  return (
    <>
      <div className={openModal ? 'open' : 'onClose'}>
        <h3>Reserving a table</h3>
        <button onClick={onClose}>x</button>

        <form
          onSubmit={handleSubmit}>
          <label>Your name:</label>
          <input type='text' name='name' onChange={handleChange} />
          <label>Date required:</label>
          <input type='date' name='date' onChange={handleChange} />

          <label>Choose time:</label>
          <select name='time' onChange={handleChange}>
            {availableTimes.map((t, index) => (
              <option key={index}>{t}</option>
            ))}
          </select>

          <label>No. of persons:</label>
          <input type='text' name='persons' onChange={handleChange} />

          <button type='submit' >Submit</button>
        </form>

        {submittedData && openModal && (
          <div style={{
            marginTop: "20px", background: "#f0f0f0", padding: "10px"

          }}>
            <h4>Last submission:</h4>
            <p>Name: {submittedData.name}</p>
            <p>No. persons: {submittedData.persons}</p>
            <p>Date: {submittedData.date}</p>
            <p>Time: {submittedData.time}</p>
          </div>
        )}

      </div>

    </>
  );
}
*/