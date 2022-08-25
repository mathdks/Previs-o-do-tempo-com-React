import React from "react";
import CityCard from "./CityCard"
import { Link } from "react-router-dom";

class cityWeather extends React.Component {
    render() {
        if(this.props.cityData.city !== null) {
            return (
                <div class="relative">
                    <CityCard cityData={this.props.cityData} />
                    <Link
                        class="absolute -bottom-5 w-full bg-stone-200 hover:bg-teal-400 p-2 rounded-b-lg text-sm text-center font-medium"
                        to="/detalhes"
                    >
                        Ver histórico
                    </Link>
                </div>
            )
        } else {
            return (
                <div class="card">
                    <div class="card-title">
                        <h1>Selecione uma cidade</h1>
                    </div>
                </div>
            )
        }
    }
}

export default cityWeather;