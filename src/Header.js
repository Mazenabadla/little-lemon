import './App.css'
export default function Header() {
    return (
        <header>
        <img className="logo" src='/little lemon images/logo.jpg'/>
        <nav className="nav">
            <ul>
                <li><a href="#"> Home</a></li>
                <li><a href="#main"> Main</a></li>
                <li><a href="#about"> Meals</a></li>
                <li><a href="#products"> About</a></li>
                <li><a href="#contact"> Footer</a></li>
            </ul>
        </nav>
        </header>
    );
}
