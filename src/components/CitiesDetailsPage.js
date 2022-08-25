import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CityCard from "./CityCard"
import Header from "./Header"

function CitiesDetailsPage() {
    let cities = useSelector((state) => state.weatherData);

    let uniqueCities = Array.from(new Set(cities));

    let listCities = uniqueCities.map((city) => {
        return (
            <CityCard key={city} cityData={city} />
        )
    })

    return (
        <div class="min-h-screen max-w-screen bg-gradient-to-b from-stone-100 to-amber-50 p-20 space-y-10">
            <Header />
            <Link 
                class="bg-stone-200 hover:bg-rose-400 p-2 rounded-lg text-sm text-center font-medium" 
                to="/"
            >
                Voltar
            </Link>
            <div class="grid grid-cols-3 gap-10">
                {listCities}
            </div>
        </div>
    )
}

export default CitiesDetailsPage;