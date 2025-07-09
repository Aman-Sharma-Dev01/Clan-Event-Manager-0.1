import Navbar from './components/Navbar/Navbar.jsx'
import Login from './components/login/login.jsx'
import Register from './components/register/register.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'



const App = () => {
  return (
    <div>
     
      <Navbar/>

      <Dashboard/>

    <Register/>

      <Login/>
      
    
    </div>
  )
}

export default App