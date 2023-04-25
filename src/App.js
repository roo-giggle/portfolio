import React from 'react';
// import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      {/* <h1 className='text-4xl font-bold font-signature'>Helllo</h1>  */}
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
       </div>
  );
}

export default App;
