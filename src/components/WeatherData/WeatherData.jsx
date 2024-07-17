import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherData = ({ day, img, imgAlt, conditions, time }) => {
    return (
        <div className='weatherData'>
            <h2>{day}</h2>
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </div>
    )
}

export default WeatherData;