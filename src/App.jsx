import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './components/Services'
import ScrollUpButton from './components/ScrollUpButton'
import ServiceLists from './components/ServiceLists'
import WhatsappButon from './components/WhatsappButon'
import Heros1 from './components/heros1'
import Heros2 from './components/Heros2'
import Heros3 from './components/Heros3'
import Slids from './components/Slids'
import AboutUsPage from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Classes from './components/Classes'
import ArtShowcase from './components/ArtShowcase'

function App() {
  const [selectedTab,setSelectedTab] = useState("Home");
  const [id,setId] = useState("1");
  return (
    <>
    <ScrollUpButton/>
    <WhatsappButon/>
    <Header setSelectedTab={setSelectedTab} selectedTab={selectedTab}></Header>
        {selectedTab == "Home" ? (
        <>
          <Slids/>
          <Heros2></Heros2>
          <Heros3/>
          <ServiceLists setId={setId} setSelectedTab={setSelectedTab}/>
          <Heros1></Heros1>
          <Services/>
        </>
      ): selectedTab == "Classes" ?(
        <Classes setId={setId} setSelectedTab={setSelectedTab}/>
      ): selectedTab == "ArtShowcase" ?(
        <ArtShowcase id={id}/>
      ): selectedTab == "AboutUs" ?(
        <AboutUsPage/>
      ): selectedTab == "ContactUs" ?(
        <ContactUs/>
      ) : (
        // Default condition if none of the tabs match
        null
      )}
    <Footer setSelectedTab={setSelectedTab} selectedTab={selectedTab} setId={setId}/>
    </>
  )
}

export default App
