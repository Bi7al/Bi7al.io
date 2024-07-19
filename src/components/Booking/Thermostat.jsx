import React, { useState, useEffect, useRef } from 'react';
import "./Thermostat.css"
const ArcGauge = () => {
    const [temperature, setTemperature] = useState(10);
    const [rangeValue, setRangeValue] = useState(10);
    const arcRef = useRef(null);

    useEffect(() => {
        const arc = arcRef.current;
        const arcLength = arc.getTotalLength();
        const step = arcLength / (40 - 10);
        const value = (rangeValue - 10) * step;
        arc.style.strokeDasharray = `${value} ${arcLength - value}`;
    }, [rangeValue]);

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
        setTemperature(e.target.value);
    };

    return (
        <div id="gauge">
            <div id="bottom-circle"></div>
            <svg version="1.1" baseProfile="full" width="190" height="190" >
                <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#b96e85" />
                    <stop offset={rangeValue / 40 * 100 + '%'} stopColor="#ae69bb" />
                </linearGradient>
                <path ref={arcRef} d="M5 95 A80 80 0 0 1 185 95" stroke="url(#gradient)" fill="none" strokeWidth="10" strokeLinecap="round" strokeDasharray="0 282.78" />
            </svg>
            <div id="center-circle">
                <span id="name">HEATING</span>
                <span id="temperature">{temperature}℃</span>
            </div>
            <input type="range" id="range" max="40" min="10" value={rangeValue} onChange={handleRangeChange} />
        </div>
    );
};

export default ArcGauge;