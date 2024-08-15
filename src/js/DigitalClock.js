import React, {useEffect,useState} from "react";

function DigitalClock(){
    const [time,setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
        return ()=>clearInterval(interval);
    }, []);
    return <div style={{paddingTop: '20px'}}>{time}</div>
}
export default DigitalClock;