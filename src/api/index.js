const baseURL = "https://api.weatherapi.com/v1/current.json?key=1a3c3f5e26a848ecb85115016250204";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return response.json();
};