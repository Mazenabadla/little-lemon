import { useState, useEffect } from 'react';
import './Reservation.css';
import { useNavigate } from 'react-router-dom';

/* global fetchAPI, submitAPI */
export default function Reservation({ activeItem, setActiveItem, submitForm }) {
  const [inputData, setInputData] = useState({ name: '', persons: '', date: '', time: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);

  const navigate = useNavigate(); 

  // 1. الدالة المحلية لإرسال البيانات وحفظها في الـ localStorage
  /*const localSubmitForm = (formData) => {
    const isConfirmed = window.submitAPI(formData);
    if (isConfirmed) {
      const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      existingBookings.push(formData);
      localStorage.setItem('bookings', JSON.stringify(existingBookings));
      
      // التوجيه لصفحة التأكيد مع البيانات
      navigate('/confirmed', { state: { bookingDetails: formData } }); 
    }
  };
  */

     const localSubmitForm = (formData) => {
    const isConfirmed = window.submitAPI(formData);
    if (isConfirmed) {
      const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      existingBookings.push(formData);
      localStorage.setItem('bookings', JSON.stringify(existingBookings));
      
      // 1. حذف سطر الـ dispatch الذي سبب الخطأ
      // 2. تحديث قائمة الأوقات المتاحة فوراً لحذف الوقت المحجوز قبل الانتقال
      if (typeof fetchTimes === 'function') {
        fetchTimes(formData.date);
      }

      navigate('/confirmed', { state: { bookingDetails: formData } }); 
    }
  };


  const handleFormSubmit = submitForm || localSubmitForm;

  // 2. دالة جلب الأوقات وفلترة المحجوز منها سابقاً من الـ localStorage
    // 1. دالة جلب الأوقات وفلترة المحجوز منها
  const fetchTimes = async (date) => {
    try {
      const times = await fetchAPI(date); 
      const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      
      // استخراج الأوقات المحجوزة لهذا التاريخ بدقة
      const bookedTimesForDate = storedBookings
        .filter(booking => booking.date === date)
        .map(booking => booking.time);
      
      // تصفية القائمة
      const filteredTimes = times.filter(time => !bookedTimesForDate.includes(time));
      setAvailableTimes(filteredTimes);

      // تحديد أول وقت متاح تلقائياً لتفادي الحقل الفارغ
      if (filteredTimes.length > 0) {
        setInputData(prev => ({ ...prev, time: filteredTimes[0] }));
      } else {
        setInputData(prev => ({ ...prev, time: '' }));
      }
    } catch (error) {
      console.error("Error fetching times:", error);
    }
  };

  
  
  
  useEffect(() => {
    if (inputData.date) {
      fetchTimes(inputData.date);
    }
  }, [inputData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

 // 2. معالج إرسال النموذج المحدث
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // التأكد من وجود وقت متاح ومحدد في الـ state قبل الإرسال
    const finalTime = inputData.time || availableTimes[0];
    const finalData = { ...inputData, time: finalTime };

    if (!finalData.time) {
      alert("لا توجد أوقات متاحة لهذا اليوم!");
      return;
    }

    setSubmittedData(finalData);
    setOpenModal(true);
    handleFormSubmit(finalData); // إرسال البيانات المضمونة للـ localStorage
    setActiveItem(null); 
  };

  
  

  return (
    <>
      {activeItem === 'table' && (
        <div className='open'>
          <h3>Reserving a table</h3>
          <button className='close' onClick={() => setActiveItem(null)}>x</button>

          <form onSubmit={handleSubmit}>
            <label>Your name:</label>
            <input type='text' name='name' value={inputData.name} onChange={handleChange} required />
            
            <label>Date required:</label>
            <input type='date' name='date' value={inputData.date} onChange={handleChange} required />

            <label>Choose time:</label>
            <select name='time' value={inputData.time} onChange={handleChange} required>
              {availableTimes.map((t, index) => (
                <option key={index} value={t}>{t}</option>
              ))}
            </select>

            <label>No. of persons:</label>
            <input type='number' min='1' name='persons' value={inputData.persons} onChange={handleChange} required />

            <button type='submit'>Submit</button>
          </form>

          {submittedData && openModal && (
            <div style={{ marginTop: "20px", background: "#f0f0f0", padding: "10px", height: '50vh' }}>
              <h4>Last submission:</h4>
              <table border="2" width="50%" height="50">
                <thead>
                  <tr>
                    <th>Name</th><th>persons</th><th>Date</th><th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ textAlign: 'center' }}>
                    <td>{submittedData.name}</td><td>{submittedData.persons}</td>
                    <td>{submittedData.date}</td><td>{submittedData.time}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </>
  );
}
