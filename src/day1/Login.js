import { useState,useEffect } from "react"
import Weather from "./Weather.js";
const Login = ({onLogin}) => {
    const[user,setUser]=useState('');
    const[showPw, setShowPw] = useState(false);
    const [password, setPassword] = useState("")
    const handleSubmit =(e)=>{
        e.preventDefault(); //이미 있는 기능 실행방지
        if (!user.trim()) return;

        onLogin(user,password)
        setShowPw(true);
    }
    const [now, setNow] = useState(new Date());

  useEffect(() => {
    // 1초마다 시간 업데이트
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  // 24시간 형식 + 초까지 표시
  const timeString = now.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const dateString = now.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
  return (
    <form id="login-page" onSubmit={handleSubmit}>
      <nav>
        <div className="txt" onClick={() => window.location.reload()}><span>𝓛</span></div>
        <Weather />
      </nav>
        <div 
        className="clock"
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          padding: "12px 16px",
          borderRadius: "12px",
          color: "#fff",
        }}
        >
          <h2>Welcome to Listland!</h2>
          <span style={{ fontSize: "12px", opacity: 0.7 }}>{dateString}</span>
          <span style={{ fontSize: "28px", letterSpacing: "2px" }}>{timeString}</span>
        <div className="input">  
          <div className="inout">
          <input 
              type="text"
              placeholder="Email"
              value={user}
              onChange={(e)=>{setUser(e.target.value)}}
          />
          {showPw &&(
            <input
            className="fade-in-up"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />)}
          </div>
          <button type="submit">LOGIN</button>
        </div>
        </div>
      
    </form>
  )
}

export default Login