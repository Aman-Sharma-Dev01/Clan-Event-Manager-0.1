import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './components/login/login.jsx'
import Register from './components/register/register.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import Footer from './components/Footer/Footer.jsx'
import EventPage from './components/EventPage/EventPage.jsx'
import {Routes,Route,useLocation} from "react-router-dom"
import EventUpload from './components/EventUploadPage/EventUpload.jsx'
import EventDetail from './components/EventDetail/EventDetail.jsx'








const App = () => {
  const location = useLocation();
  
  const path = location.pathname;

  // Handle dynamic paths
  const hideNavbarFooter =
    path.startsWith("/event/") || 
    ["/login", "/register", "/dashboard", "/event", "/uploadevent"].includes(path);

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/event" element={<EventPage />} />
        <Route exact path="/uploadevent" element={<EventUpload />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
