import { useState, useEffect } from 'react';
import axios from 'axios';
import CityCard from './CityCard';
import CityModal from './CityModal';
import styles from '../styles/Dashboard.module.css';
import modalStyles from '../styles/CityModal.module.css';
import cities from '../cities.js';

const Dashboard = () => {
  const [citiesWeather, setCitiesWeather] = useState(null);
  const [modal, setModal] = useState({ index: null, data: null });

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
    setModal({ index, data: citiesWeather[index] });
  };

  const closeModal = () => {
    setModal({ index: null, data: null });
  };

  return (
    <div>
      <div className={styles.dashboard}>
        {citiesWeather?.map((el, i) => (
          <CityCard key={el.name} index={i} data={el} openModal={openModal} />
        ))}
      </div>
      {modal.data && (
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
};

export default Dashboard;
