import React, { useEffect, useState } from "react";
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import MenuSection from './components/MenuSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Copyright from './components/Copyright';
import Sectionn from './components/Sectionn';
import Signature from "./components/Signature";
import { Axios } from "axios";
export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [data,setData]=useState("");
  const getData=async()=>
  {
    const response=await Axios.getdata('https:/localhost:1702');
    setData(response.data);

  }
  useEffect(()=>
  {
    getData()
  },[]);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "menu":
        return <MenuSection />;
      case "services":
        return <Services />;
      case "contact":
        return <ContactUs />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <NavigationBar setActiveSection={setActiveSection} />
      {renderSection()}
      <Sectionn/>
      <Signature/>
      <Footer />
      <Copyright />
    </>
  );
}
