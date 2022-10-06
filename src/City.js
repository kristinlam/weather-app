import { useState, useEffect } from 'react';
import axios from 'axios';

const City = ({ name }) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fe401b4fb11016097b8ab6892da9c0a4&units=imperial`
      )
      .then((res) => {
        console.log('res.data', res.data);
        setCity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="city">
      {city ? (
        <div>
          <img
            style={{ maxWidth: 200 }}
            className="city__image"
            alt={city.name}
            src={require(`./images/${city.name}.jpg`)}
          />

          <div className="city__info">
            <h2 className="city__info--name">{city.name}</h2>
            <p className="city__info--temp">{Math.round(city.main.temp)}°F</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default City;
