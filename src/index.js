import { useState, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking';

// حقن الدوال مباشرة في كائن المتصفح لترتضيها اختبارات كورسيرا
window.fetchAPI = function(date) {
    let result = [];
    let dt = new Date(date);
    let seed = dt.getDate();
    
    const random = function() {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) { result.push(i + ':00'); }
        if(random() < 0.5) { result.push(i + ':30'); }
    }
    return result;
};

window.submitAPI = function(formData) {
    return true;
};


/* global fetchAPI */

export const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0];
    const allTimes = window.fetchAPI(today);
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookedTimes = storedBookings
        .filter(booking => booking.date === today)
        .map(booking => booking.time);
        
    return allTimes.filter(time => !bookedTimes.includes(time));
};


/*const initializeTimes = () => []; */
//const initializeTimes = () => ["17:00", "18:00", "19:00"];

/*const updateTimes = (availableTimes, action) => {
  if (action.type === 'SET-TIMES') {
    //return ["17:00", "18:00", "19:00"];
    return fetchAPI(action.payload);
  }
  return availableTimes;
};
*/
// دالة الـ Reducer المعتمدة التي تفحص الـ localStorage
export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        const selectedDate = action.payload;
        // 1. جلب الأوقات الافتراضية من الدالة المولدّة
        const allTimes = window.fetchAPI(selectedDate);
        
        // 2. جلب الحجوزات الحالية من التخزين المحلي للمتصفح
        const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        
        // 3. تصفية الحجوزات الخاصة بهذا التاريخ فقط واستخراج أوقاتها
        const bookedTimes = storedBookings
            .filter(booking => booking.date === selectedDate)
            .map(booking => booking.time);
            
        // 4. إرجاع الأوقات غير المحجوزة فقط
        return allTimes.filter(time => !bookedTimes.includes(time));
    }
    return state;
};

function App() {
  const [activeItem, setActiveItem] = useState(null);
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Reservation />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    
      <Header setActiveItem={setActiveItem} availableTimes={availableTimes} dispatch={dispatch} />
      <Main setActiveItem={setActiveItem} availableTimes={availableTimes} dispatch={dispatch} />
      <Menu setActiveItem={setActiveItem} />
      <Home />
      <Reservation activeItem={activeItem} setActiveItem={setActiveItem} availableTimes={availableTimes} dispatch={dispatch} />
      <About />
      <Testimonials />
      <Footer />
      
      
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
