import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

import Footer from './components/Footer';
function App() {
    return (
        <>
            <Header />
            <Main />
            <Menu/>
            <Footer />
        </>
    )
}




createRoot(document.getElementById('root')).render(
    <App />
);
