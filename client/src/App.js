import { createContext, useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';

export const UserContext = createContext()
function App() {
  const [user, setUser] = useState({})
  useEffect(()=>{
    // axios('http://localhost:3002/auth/loadUser')
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))
    const user = localStorage.getItem("user");
    // setUser(user);
    if(user){
      setUser(JSON.parse(user))
    }
  },[])


  return (
    <UserContext.Provider value={[user, setUser]}>
    <>
      {
        user.name ? <Dashboard /> : <Login></Login>
      }
    </>
    </UserContext.Provider>
  );
}

export default App;
