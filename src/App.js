import './App.css';
import LandingSection from './components/LandingSection';
import NavSection from './components/NavSection';
import AOS from "aos";
import { useEffect } from 'react';
import ServiceSection from './components/ServiceSection';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, []);

  return (
    <>
      <NavSection />
      <LandingSection />
      <ServiceSection/>
      <AboutSection/>
      <FooterSection/>
    </>
  );
}

export default App;
