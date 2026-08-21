import { useState } from "react";
import './Header.css'
export default function Header() {
const [open,setOpen]=useState(false)   
function toggle(){
    setOpen(!open)
}
    return (
        <header>
            <button className='logo-btn' onClick={toggle}>
                <img className="logo" src='/little lemon images/logo.jpg' />
            </button>
            <nav className={open? "nav open " : "nav"}>

                <ul>
                    <li><a href="#"> Home</a></li>
                    <li><a href="#about"> About</a></li>
                    <li><a href="#menu"> Menu</a></li>
                    <li><a href="#reservations"> Reservations</a></li>
                    <li><a href="#order"> Order online</a></li>
                    <li><a href="#login"> Login</a></li>
                </ul>
            </nav>
        </header>
    );
}






