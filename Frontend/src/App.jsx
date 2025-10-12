import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './components/Login/Login.jsx'
// import Register from './components/Register/Register.jsx'
import About from './components/About/About.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Homepage from './components/HomePage/Homepage.jsx'
import EventDetail from './components/EventDetail/EventDetail.jsx'
import Footer from './components/Footer/Footer.jsx'
import EventPage from './components/EventPage/EventPage.jsx'
import {Routes,Route,useLocation} from "react-router-dom"
import EventUpload from './components/EventUploadPage/EventUpload.jsx'
import { useAuth } from './Context/AuthProvider.jsx'
import { Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import WaterSharksPage from './components/KnowYourClan/WaterSharksPage.jsx'
import ForestRhinosPage from './components/KnowYourClan/ForestRhinosPage.jsx'
import AirFalconsPage from './components/KnowYourClan/AirFalconsPage.jsx'
import WildCatssPage from './components/KnowYourClan/WildCatssPage.jsx'
import Khalbali from './components/Society/Khalbali/Khalbali.jsx'
import Moksh from './components/Society/Moksh/Moksh.jsx'
import Noora from './components/Society/Noora/Noora.jsx'
import Felicia from './components/Society/Felicia/Felicia.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Rehnuma from './components/Society/Rehnuma/Rehnuma.jsx'
import Drishti from './components/Society/Drishti/Drishti.jsx'
import Rudra from './components/Society/Rudra/Rudra.jsx'
import Athelites from './components/Society/Athelites/Athelites.jsx'
import Gamenix from './components/Society/Gamenix/Gamenix.jsx'
import Techsoul from './components/Society/Techsoul/Techsoul.jsx'
import ClanPointsScoreCard from './components/ScoreCard/ClanPointsScoreCard.jsx'


const App = () => {
  const location = useLocation();

  const path = location.pathname;

  // Handle dynamic paths
  const hideNavbarFooter =
    path.startsWith("/event/") || 
    ["/login", "/register", "/uploadevent" , "/techsoul-page" , "/rudra-page" , "/noora-page" , "/rehnuma-page" ,"/khalbali-page" , "/drishti-page" ,"/gamenix-page" , "/athelites-page" , "/moksh-page" , "/felicia-page" ].includes(path);

  const { events, isAuthenticated , profile } = useAuth();
  let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage to maininting the routes protect (Go to login.jsx)
  console.log(events);
  console.log(profile);
  console.log(isAuthenticated); // it is not using because every page refresh it was redirected to /login

  return (
    <div>
     <Toaster position="top-center" />
      {!hideNavbarFooter  && <Navbar/>}
      <ScrollToTop />
     
    <Routes>
     <Route exact path="/" element = {<Homepage/>} />
       <Route exact path="/dashboard" element = {token ? <Dashboard /> : <Navigate to={"/login"} />}/>
        {/* <Route exact path="/about" element = {<About />}/> */}
        <Route exact path="/about" element = {<ClanPointsScoreCard />}/>
       <Route exact path="/uploadevent" element={token ? <EventUpload /> : <Navigate to={"/login"} />}/>

       <Route exact path="/login" element = {<Login/>} />
       {/* <Route exact path="/register" element = {<Register/>} /> */}
       <Route exact path="/event" element = {<EventPage/>} />
       <Route path="/event/:id" element={<EventDetail/> } />
       <Route exact path="/wild-cats-page" element = {<WildCatssPage/>} />
       <Route exact path="/forest-rhinos-page" element = {<ForestRhinosPage/>} />
       <Route exact path="/water-sharks-page" element = {<WaterSharksPage/>} />
       <Route exact path="/air-falcons-page" element = {<AirFalconsPage/>} />

       <Route exact path="/khalbali-page" element = {<Khalbali/>} />
       <Route exact path="/moksh-page" element = {<Moksh/>} />
       <Route exact path="/noora-page" element = {<Noora/>} />
       <Route exact path="/felicia-page" element = {<Felicia/>} />
       <Route exact path="/rehnuma-page" element = {<Rehnuma/>} />
       <Route exact path="/drishti-page" element = {<Drishti/>} />
       <Route exact path="/rudra-page" element = {<Rudra/>} />
       <Route exact path="/athelites-page" element = {<Athelites/>} />
       <Route exact path="/gamenix-page" element = {<Gamenix/>} />
       <Route exact path="/techsoul-page" element = {<Techsoul/>} />

  


      </Routes> 

 {!hideNavbarFooter  && <Footer/>}

    </div>
  )
}

export default App