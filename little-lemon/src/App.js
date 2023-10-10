
import './App.css';
import BookingsPage from './Pages/BookingsPage';
import Confirmation from './Pages/Confirmation';
import HomePage from './Pages/HomePage';
import Maintenance from './Pages/Maintenance';
import FooterComponent from './components/FooterComponent';
import Navbar from './components/Navbar';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon restaurant website "/>
      <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" exact element = {<HomePage />}></Route>
              <Route path="/booking" element = {<BookingsPage />}></Route>
              <Route path="/Confirmation" element = {<Confirmation />}></Route>
              <Route path="/about" element = {<Maintenance name = "About"/>}></Route>
              <Route path="/new" element = {<Maintenance name = "Order Online"/>}></Route>
              <Route path="/menu" element = {<Maintenance name = "Menu"/>}></Route>
              <Route path="/login" element = {<Maintenance name = "Login"/>}></Route>
            </Routes>
            <div className="footerpage-container">
                  <FooterComponent />
            </div> 
      </BrowserRouter>

    </div>
  );
}

export default App;
