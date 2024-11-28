import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


function Time(interval) {
    const [time, setTime] = useState(Date.now());
    const timer = useRef(null);
    //console.log(interval);
    useEffect(() => {
        timer.current = setInterval(() => setTime(Date.now()),interval)
        return () => clearInterval(time.current)
    },[interval]);
    return <h1>{`Time: ${time}`}</h1>
};

export default Time;