import { useEffect, useState } from "react";
import Hello from "./day1/Hello";
import Login from "./day1/Login";
import Weather from "./day1/Weather";
import Todos from "./day1/Todos";
import Quote from "./day1/Quote";
import "./App.css";
const App =()=> {
  
  const [userName,setUserName]=useState(null);
  
  const handleLogin=(data)=>{
    localStorage.setItem("USER-NAME",data);
    setUserName(data);
  }
  useEffect(()=>{
    //로컬 스토리지에 userName이 있는지 체크
    const saved = localStorage.getItem("USER_NAME");
    setUserName(saved);
  },[]);
    const handleClick =()=>{
      // const saved = localStorage.getItem("USER-NAME");
      localStorage.clear();
      // setUserName('');
      window.location.reload();
    }
    
  return (
    <div id="App">
      {
        userName ? <Hello user={userName} onLogout={handleClick}/> : <Login onLogin={handleLogin}/>
      }
      <Quote/>
      <Todos/>
      <Weather/>
    </div>
  );
}

export default App;
