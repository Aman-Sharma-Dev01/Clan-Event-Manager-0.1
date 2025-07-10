import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
// import Login from './components/login/login.jsx'
// import Register from './components/register/register.jsx'
// import Dashboard from './components/Dashboard/Dashboard.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
     
      <Navbar/>
      <Homepage/>
      <Footer/>

      {/* <Dashboard/> */}

    {/* <Register/> */}

      {/* <Login/> */}
      
    
    </div>
  )
}

export default App