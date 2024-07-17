import './WeatherForecast.css';
import WeatherData from '../WeatherData/WeatherData';

const WeatherForecast = ({ forecasts }) => {
    return (
        <div className="weather">
            {
                forecasts.map((forecast, index) => (
                    <WeatherData className="weatherData" key={index} {...forecast} />
                ))
            }
        </div>
    )
}

export default WeatherForecast;