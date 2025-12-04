import { useState, useEffect } from "react";
import Login from "./day1/Login.js";
import Todos from "./day1/Todos.js";
import Quote from "./day1/Quote.js";
import "../src/App.css"

function App() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 시 실행
  const handleLogin = (email, password) => {
    if (!email || !password) return; // 둘 중 하나라도 비어 있으면 로그인 안 함

    // 유저 이름/이메일을 localStorage에 저장
    localStorage.setItem("USER_NAME", email);
    setUserName(email);
    setIsLoggedIn(true);
  };

  // 새로고침해도 로그인 유지
  useEffect(() => {
    const saved = localStorage.getItem("USER_NAME");
    if (saved) {
      setUserName(saved);
      setIsLoggedIn(true);
    }
  }, []);

  //로그아웃하고 싶으면 이런 함수 쓰면 됨
  const handleLogout = () => {
    localStorage.removeItem("USER_NAME");
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <div id="App">
      {isLoggedIn ? (
        <Todos user={userName} onLogout={handleLogout}/>
      ) : (
        <Login onLogin={handleLogin}/>
      )}
      <Quote />
      
    </div>
  );
}

export default App;

