import { useState, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// window.fetchAPI = function(date) {
//     let result = [];
//     let dt = new Date(date);
//     let seed = dt.getDate();

//     const random = function() {
//         var x = Math.sin(seed++) * 10000;
//         return x - Math.floor(x);
//     };

//     for(let i = 17; i <= 23; i++) {
//         if(random() < 0.5) { result.push(i + ':00'); }
//         if(random() < 0.5) { result.push(i + ':30'); }
//     }
//     return result;
// };

// window.submitAPI = function(formData) {
//     return true;
// };


/* global fetchAPI */

// export const initializeTimes = () => {
//     const today = new Date().toISOString().split('T')[0];
//     const allTimes = window.fetchAPI(today);
//     const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
//     const bookedTimes = storedBookings
//         .filter(booking => booking.date === today)
//         .map(booking => booking.time);

//     return allTimes.filter(time => !bookedTimes.includes(time));
// };


/*const initializeTimes = () => []; */
//const initializeTimes = () => ["17:00", "18:00", "19:00"];











const initialTimes = () => {
  return {
    "2026-10-04": ["17:00", "18:00", "19:00", "20:00"],
    "2026-10-05": ["17:00", "18:00", "19:00", "20:00"],
    "2026-10-06": ["17:00", "18:00", "19:00", "20:00"],
  };
};




const updateTimes = (availableTimes, action) => {
  switch (action.type) {

    case 'BOOKING': {
      const { bookDate, bookTime } = action.payload;
      return {
        ...availableTimes,
        [bookDate]: availableTimes[bookDate].filter(t => t !== bookTime)
      };
    }

    case 'DELETING': {
      const { delDate, delTime } = action.payload;

      return {
        ...availableTimes,
        [delDate]: [...availableTimes[delDate], delTime]
      };
    }


    default:
      return availableTimes;
  }
};







function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, {}, initialTimes);
  const [openModal, setOpenModal] = useState(false);

  return (
    <BrowserRouter>
      <Header onReserveClick={() => setOpenModal(true)} />
      <Home />
      <Main onReserveClick={() => setOpenModal(true)} />
      <Menu />
      <Reservation
        availableTimes={availableTimes}
        dispatch={dispatch}
        onClose={() => setOpenModal(false)}
        openModal={openModal} />
      <Testimonials />
      <About />
      <Footer />
    </BrowserRouter>
  );
}



createRoot(document.getElementById('root')).render(<App />);
