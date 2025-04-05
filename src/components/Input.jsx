import React from 'react';
import { useWeather } from '../context/Weather';

const Input = () => {
    const weather = useWeather();
    console.log("Weather", weather);

    return (
        <input
            className='input-field'
            value={weather.searchCity}
            onChange={(e) => weather.setSearchCity(e.target.value)}
        />
    );
};
export default Input;