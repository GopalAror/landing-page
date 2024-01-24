import './App.css';
import Cloud from './components/Cloud';
import Footer from './components/Footer';
import Header from './components/Header';
import Joinus from './components/Joinus';
import Map from './components/Map';
import Nav from './components/Nav';
import Nigerian from './components/Nigerian';
import Started from './components/Started';
import Stories from './components/Stories';
import logo from "./assets/images/logo.webp";
import { useEffect, useState } from 'react';
import BackToTop from './components/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [preloder, setpreloder] = useState(false)
  useEffect(() => {
    setpreloder(true)
    setTimeout(() => {
      setpreloder(false)
    }, 3000);
  }, [])
  useEffect(() => {
    AOS.init(
      {
        duration:2000,
        once:true,
      }
    );
  }, [])
  return (
    <div>
      {preloder ? (<div className='bg-white fixed top-0 bottom-0 overflow-hidden flex items-center flex-col justify-center w-full h-full'>
        <img className=' animate-bounce' src={logo} alt='gif' />
        <div className=' font-poppins text-[50px] text-[#B00000] font-semibold'>Loading ...</div>
      </div>) : (<div>
        <Nav />
        <Header />
        <Cloud />
        <Map />
        <Started />
        <Stories />
        <Nigerian />
        <Joinus />
        <Footer />
        <BackToTop />
      </div>)}
    </div>
  );
}
export default App;