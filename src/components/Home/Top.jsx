import React, { useEffect, useState } from 'react'
import moment from 'moment';
import "./Top.css"
function Top() {
    const date = new Date();
    const time = moment(date).format('dddd, MMMM Do YYYY');
    const user = "Random"
    // const [weather, setWeather] = useState(null);
    // const [city, setCity] = useState(null);
    // const [loading, setLoading] = useState(true);


    // const [coords, setCoords] = useState(null);

    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(({ coords }) => {
    //             setCoords(coords);

    //         });
    //     } else {
    //         alert("Geolocation is not supported by this browser.");
    //     }
    // }
    //useEffect(() => {
    //   getLocation(); location will set coordinates and then coord.latitude &coord.longitude can be used to fetch weather and location data
    //}, [])
    //useEffect(() => {
    //     async function fetchWeather() {
    //         const response = await fetch('');
    //         const data = await response.json();
    //         setWeather(data);
    //     }
    //     async function fetchLocation() {
    //         const response = await fetch('');
    //         const data = await response.json();
    //         setCity(data);
    //     }
    //     fetchWeather();
    //     fetchLocation();
    //     setLoading(!loading)

    //}, [coords])

    return (
        <div className="Container-Top">
            <div className="text">
                <h3>Welcome {user}, Today is {time}</h3>
            </div>
            <div className="weather">
                <p>16 </p>
            </div>
        </div>
    )
}

export default Top