 import { createRoot } from 'react-dom/client';
 import Header from './Header';
//import Main from './Main';
//import Meals from './Main';
//import About from './About';
import Footer from './Footer';
import './App.css'
function App(){
    return(
        <>
        <Header/>
        <Footer/>
        </>
    )
}




createRoot(document.getElementById('root')).render(
    <App />
);
