import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
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

const App = () => {
  const location = useLocation();

  const path = location.pathname;

  // Handle dynamic paths
  const hideNavbarFooter =
    path.startsWith("/event/") || 
    ["/login", "/register", "/uploadevent"].includes(path);

  const { events, isAuthenticated , profile } = useAuth();
  let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage to maininting the routes protect (Go to login.jsx)
  console.log(events);
  console.log(profile);
  console.log(isAuthenticated); // it is not using because every page refresh it was redirected to /login

  return (
    <div>
     <Toaster position="top-center" />
      {!hideNavbarFooter  && <Navbar/>}
     
    <Routes>
      <Route
          exact
          path="/"
          element={token ? <Homepage /> : <Navigate to={"/login"} />}
        />
     <Route exact path="/" element = {<Homepage/>} />
       <Route exact path="/dashboard" element = {token ? <Dashboard /> : <Navigate to={"/login"} />}/>
        <Route exact path="/about" element = {token ? <About /> : <Navigate to={"/login"} />}/>

       <Route exact path="/login" element = {<Login/>} />
       <Route exact path="/register" element = {<Register/>} />
       <Route exact path="/event" element = {token ? <EventPage /> : <Navigate to={"/login"} />} />
       <Route exact path="/uploadevent" element={token ? <EventUpload /> : <Navigate to={"/login"} />}/>
        <Route path="/event/:id" element={token ? <EventDetail /> : <Navigate to={"/login"} />} />
       

      </Routes> 

 {!hideNavbarFooter  && <Footer/>}

    </div>
  )
}

export default App