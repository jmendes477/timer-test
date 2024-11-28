import React from "react";
import { useState } from "react";
import Time from "./Time";

function Interval(){
    const [interval, updateInterval] = useState(1000);
    return(
        <React.Fragment>
            <Time interval={interval} />
            <h2>{`Interval: ${interval}`}</h2>
            <input type="range" min="1" value={interval} max="10000" onChange={e => updateInterval(e.target.value)}/>
        </React.Fragment>
    )
};

export default Interval;