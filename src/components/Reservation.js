import { useState, useEffect } from 'react';
import './Reservation.css';

export default function Reservation({ availableTimes, dispatch, onClose, openModal }) {
  const [inputData, setInputData] = useState({ name: '', persons: '', date: '', time: '' });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.name && inputData.date && inputData.time && inputData.persons) {
      dispatch({ type: 'BOOKING', payload: { bookDate: inputData.date, bookTime: inputData.time } });

      const newSubmittedData = [...submittedData, inputData];
      const sortedData = handleSort(newSubmittedData);
      setSubmittedData(sortedData);

      setInputData({ name: '', persons: '', date: '', time: '' });
    }
  };

  const handleDelete = (booking) => {
    dispatch({
      type: 'DELETING',
      payload: { delDate: booking.date, delTime: booking.time }
    });

    const newSubmittedData = submittedData.filter(
      b => !(b.date === booking.date && b.time === booking.time)
    );
    const sortedData = handleSort(newSubmittedData);
    setSubmittedData(sortedData);

  };

  const handleSort = (data) => {
    return [...data].sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      //***********
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;

      return 0;
    });
  };




  useEffect(() => {
    const allStuff = localStorage.getItem("submittedData");
    if (allStuff) {
      setSubmittedData(JSON.parse(allStuff));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("submittedData", JSON.stringify(submittedData));
  }, [submittedData]);






  return (
    <div className={openModal ? 'open' : 'onClose'}>
      <h3>Reserving a table</h3>
      <button aria-label='closing form' className='closing-x' onClick={onClose}>x</button>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Your name:</label>
        <input type='text' name='name' id='name' value={inputData.name} onChange={handleChange} required minLength='3' />

        <label htmlFor='date'>Date required:</label>
        <input type='date' name='date'id='date' value={inputData.date} onChange={handleChange} />

        <label htmlFor='time'>Choose time:</label>
        <select type='time' id='time' min='17:00' max='19:00' name='time'  value={inputData.time} onChange={handleChange}>
          <option value="" required>Select a time</option>
          {availableTimes[inputData.date]?.map((t, index) => (
            <option key={index} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor='number'>No. of persons:</label>
        <input type='text' id='number' name='persons' value={inputData.persons} onChange={handleChange}
          min='1' required />

        <button type='submit' aria-label='submiting and arranging' >Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div style={{ marginTop: "20px", background: "#f0f0f0", padding: "10px" }}>
          <h4>Booked reservations:</h4>
          <table border="1" width="100%" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Name</th><th>Persons</th><th>Date</th><th>Time</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((booking, i) => (
                <tr key={i}>
                  <td>{booking.name}</td>
                  <td>{booking.persons}</td>
                  <td>{booking.date}</td>
                  <td style={{ color: 'green', fontWeight: 'bold' }}>{booking.time}</td>
                  <td onClick={() => handleDelete(booking)} style={{ cursor: 'pointer' }}>decline</td>
                </tr>))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
