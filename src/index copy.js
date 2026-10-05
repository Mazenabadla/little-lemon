import { useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking';

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



export const initialTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return initialTimes();
  }
  return state;
};

function App() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initialTimes);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reservation availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>

      <Header availableTimes={availableTimes} dispatch={dispatch} />
      <Main availableTimes={availableTimes} dispatch={dispatch} />
      <Menu />
      <Home />
      <About />
      <Testimonials />
      <Footer />

    </BrowserRouter>
  );
}






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



// export const updateTimes = (state, action) => {
//     if (action.type === 'UPDATE_TIMES') {
//         const selectedDate = action.payload;
//         const allTimes = (selectedDate);

//         const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];

//         const bookedTimes = storedBookings
//             .filter(booking => booking.date === selectedDate)
//             .map(booking => booking.time);

//         return allTimes.filter(time => !bookedTimes.includes(time));
//     }
//     return state;
// };




createRoot(document.getElementById('root')).render(<App />);
