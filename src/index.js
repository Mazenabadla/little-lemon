 import { useState } from 'react';
 import { createRoot } from 'react-dom/client';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'


function App() {
    const [activeItem,setActiveItem]=useState(null)

    return (
        <BrowserRouter>
            <Header setActiveItem={setActiveItem} />
            <Main setActiveItem={setActiveItem} />
            <Menu setActiveItem={setActiveItem} />
            <Home/>
            <Reservation activeItem={activeItem} setActiveItem={setActiveItem}/>
            <About/>
            <Testimonials/>

            <Footer/>
            
            
        </BrowserRouter>
    )
}




createRoot(document.getElementById('root')).render(
    <App />
);