import React, { useEffect, useState } from 'react';
import moment from 'moment';
import "./Top.css";

function Top() {
    // Initialize date and format it using moment.js
    const date = new Date();
    const time = moment(date).format('dddd, MMMM Do YYYY');
    const user = "Random";

    // State variables for weather, city, and loading status
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true);

    // State variable for storing coordinates
    const [coords, setCoords] = useState(null);

    // Function to get the user's current location
    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(({ coords }) => {
    //             setCoords(coords);
    //         }, (error) => {
    //             console.error("Error Code = " + error.code + " - " + error.message);
    //         });
    //     } else {
    //         alert("Geolocation is not supported by this browser.");
    //     }
    // }

    // Fetch weather and location data when coordinates are available
    // useEffect(() => {
    //     if (coords) {
    //         const { latitude, longitude } = coords;

    //         async function fetchWeather() {
    //             const response = await fetch(`https://api.weather.com/weather?lat=${latitude}&lon=${longitude}`);
    //             const data = await response.json();
    //             setWeather(data);
    //         }

    //         async function fetchLocation() {
    //             const response = await fetch(`https://api.weather.com/location?lat=${latitude}&lon=${longitude}`);
    //             const data = await response.json();
    //             setCity(data);
    //         }

    //         fetchWeather();
    //         fetchLocation();
    //         setLoading(false);
    //     }
    // }, [coords]);

    // Get the user's location when the component mounts
    // useEffect(() => {
    //     getLocation();
    // }, []);

    return (
        <div className="Container-Top">
            <div className="text">
                <h3>Welcome {user}, Today is {time}</h3>
            </div>
            <div className="weather">
                {loading ? <p>Loading...</p> : <p>{weather ? weather.temperature : 'No weather data'}</p>}
            </div>
        </div>
    );
}

export default Top;
