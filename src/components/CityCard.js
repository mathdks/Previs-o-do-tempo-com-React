import React from "react";

class cityCard extends React.Component {
    render() {
        return (
            <div class="card relative">
                <div class="card-title">
                    <h2>
                        {this.props.cityData.city}
                    </h2>
                    <img
                        src={`http://openweathermap.org/img/w/${this.props.cityData.iconTemperature}.png`}
                        alt={`Previsão do tempo para ${this.props.cityData.city}`}
                    />
                </div>
                <div class="card-details">
                    Agora
                    <span>
                        {this.props.cityData.currentTemperature}
                    </span>
                </div>
                <div class="card-details">
                    Máxima
                    <span>
                        {this.props.cityData.maxTemperature}
                    </span>
                </div>
                <div class="card-details">
                    Mínima
                    <span>
                        {this.props.cityData.minTemperature}
                    </span>
                </div>
            </div>
        )
    }
}

export default cityCard;