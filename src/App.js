import { useState, useEffect } from 'react';
import axios from 'axios';
import CityCard from './components/CityCard';
import CityModal from './components/CityModal';
import styles from './styles/app.module.css';
import modalStyles from './styles/CityModal.module.css';
import cities from './cities.js';

function App() {
  const [citiesWeather, setCitiesWeather] = useState(null);
  const [modal, setModal] = useState({ show: false, data: null });

  useEffect(() => {
    const getWeatherData = () => {
      let promises = cities.map((city) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
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

  const openModal = (index) => {
    setModal({ show: true, index: index, data: citiesWeather[index] });
  };

  const closeModal = () => {
    setModal({ show: false, index: null, data: null });
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
        {citiesWeather?.map((el, i) => (
          <CityCard key={i} index={i} data={el} openModal={openModal} />
        ))}
      </div>
      {modal.show && modal.data && (
        <div className={modalStyles.container}>
          <CityModal
            index={modal.index}
            data={modal.data}
            closeModal={closeModal}
          />
          <div className={modalStyles.overlay} onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}

export default App;
