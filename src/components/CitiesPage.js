import {useState} from "react";
import CityButton from "./CityButton";
import CityWeather from "./CityWeather";
import Header from "./Header"
import axios from "axios";
import { useDispatch } from 'react-redux'
import { addCity } from '../features/cities'
import { database } from '../utils/firebase'
import { collection, addDoc } from "firebase/firestore";

function CitiesPage() {
    const [cityData, setCityData] = useState({
        city: null,
        currentTemperature: null,
        maxTemperature: null,
        minTemperature: null,
        iconTemperature: null
    });

    let dispatch = useDispatch()
    if (cityData.city !== null) {
        dispatch(addCity(cityData))
        addDoc(collection(database, "cityWeather"), {
            city: cityData.city,
            currentTemperature: cityData.currentTemperature,
            maxTemperature: cityData.maxTemperature,
            minTemperature: cityData.minTemperature,
        })
    }

    function convertToCelsius(k){
        return Math.round(k) + '°C';
    }

    function useCityWeatherData(city) {
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`

        axios.get(apiUrl)
            .then(response => {
                let currentTemperature = convertToCelsius(response.data.main.temp);
                let maxTemperature = convertToCelsius(response.data.main.temp_max);
                let minTemperature = convertToCelsius(response.data.main.temp_min);

                let cityData = {
                    city: response.data.name,
                    currentTemperature: currentTemperature,
                    maxTemperature: maxTemperature,
                    minTemperature: minTemperature,
                    iconTemperature: response.data.weather[0].icon
                }

                setCityData(cityData);

            }).catch(error => {
                return error;
            }
        )
    }

    return (
        <div class="h-screen w-screen bg-gradient-to-b from-stone-100 to-amber-50 p-20 flex justify-center">
            <Header />
            <div class="space-y-10">
                <CityWeather cityData={cityData} />
                <div class="flex gap-5">
                    <CityButton method={useCityWeatherData} city="São Paulo" />
                    <CityButton method={useCityWeatherData} city="Paris" />
                    <CityButton method={useCityWeatherData} city="Buenos Aires" />
                </div>
            </div>
        </div>
    )
    
}

export default CitiesPage;