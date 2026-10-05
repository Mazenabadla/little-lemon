import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './Header.css';
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";
import Reservation from "./Reservation";


export default function Header({ onReserveClick }) {
    const [open, setOpen] = useState(true)

    return (
        <>
            <header>
                <button className='logo-btn' onClick={() => setOpen(!open)}>
                    <img src='/little lemon images/logo.jpg' />
                </button>
                <nav className={open ? "Nav  " : "hide "}>


                    <Link to="/"> Home</Link>
                    <Link to="/about"> About</Link>
                    <Link to="/reservation" onClick={onReserveClick}> Reservation</Link>
                    <Link to="/order" > Order online</Link>
                    <Link to="/Menu" > Menu</Link>
                    <Link to="/login"> Login</Link>

                </nav>




            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </>
    );
}





