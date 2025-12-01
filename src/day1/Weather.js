import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
    const KEY = '7032cf5ed7aaf73118e6611eae8f1216';  
    
    //상태관리
    const [weather,setWeather] = useState(null);
    const [iconURL, setIconURL] = useState('');
    const[error,setError]=useState(null);
    const [loading,setLoading] = useState(false);
    const fetchWeather = async(lat,lon)=>{
        try{
            setError('');
            setLoading(true);
            const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric&lang=kr`;
            const res = await axios.get(URL);
        setWeather(res.data);
        const iconCode = res.data.weather[0].icon;
        const ICON= ` https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        setIconURL(ICON);
    }catch(err){
        setError("날시 정보를 가지고 올 수 없습니다."+err.message);
    }finally{
        setLoading(false);
    }
}
    //컴포넌트 실행시 딱 한번만 실행
    useEffect(()=>{
        const option = {
            enableHighAccuracy:true,
            timeout: 5000,
            maximunAge:0
        }
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition((position)=>{
                const{latitude,longgitude}=position.coords;
                //날씨 API 호출
                fetchWeather(latitude,longgitude);
            },(err)=>{
                setError('위치정보를 가져올 수 없습니다.'+err.message);
            },
            option);
        }else{
            setError('이 브라우저에서는 위치 정보 사용이 불가능합니다.');
        }
    },[]);
  return (
    <div id="weatherpage">
        {loading && <p className="loading">날씨 정보를 가져오는중...</p>}
        {error && <p className="error">{error}</p>}
        {!weather && <p>위치 정보를 기다리는 중...</p>}
        {
            weather&&(
        <>
        <h2>현재 위치 기준 날씨</h2>
        <p>도시:{weather.name}</p>
        <p>기온:{weather.main.temp}℃</p>
        <p>체감온도:{weather.main.feels_like}℃</p>
        <p>체감온도:{weather.weather[0].description}</p>

        {
            iconURL &&
            <img src={iconURL} alt={weather.weather[0].description}/>
        }
        </>
        )
        }
    </div>
  )
}

export default Weather