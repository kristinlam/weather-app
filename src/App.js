import { useState, useEffect } from 'react';
import axios from 'axios';
import City from './City';
import Modal from './Modal';
import styles from './styles/app.module.css';
import modalStyles from './styles/modal.module.css';
import cities from './cities.js';

function App() {
  const [citiesWeather, setCitiesWeather] = useState(null);
  const [modal, setModal] = useState({ show: false, data: null });

  useEffect(() => {
    const getWeatherData = () => {
      let promises = cities.map((city) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe401b4fb11016097b8ab6892da9c0a4&units=imperial`
        )
      );

      Promise.all(promises).then((responses) => {
        const weatherData = responses.map((res) => res.data);
        console.log(weatherData);
        setCitiesWeather(weatherData);
      });
    };

    getWeatherData();
  }, []);

  const openModal = (idx) => {
    setModal({ show: true, data: citiesWeather[idx] });
  };

  const closeModal = () => {
    setModal({ show: false, data: null });
  };

  return (
    <div className={styles.app}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Weather App</h1>
        <div className={styles.description}>
          <p>Today's weather for the top 10 most visited cities</p>
          <p>
            Weather data from OpenWeatherMap API, city data from Bloomberg, and
            photos from Unsplash
          </p>
        </div>
      </div>
      <div className={styles.home}>
        {citiesWeather?.map((el, idx) => (
          <City data={el} key={idx} idx={idx} openModal={openModal} />
        ))}
      </div>
      {modal.show && modal.data && (
        <div className={modalStyles.container}>
          <Modal closeModal={closeModal} data={modal.data} />
          <div className={modalStyles.overlay} onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}

export default App;
