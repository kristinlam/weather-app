import styles from '../styles/CityModal.module.css';
import { captializeFirstLetter, roundOneDecimalPoint } from '../helpers';
import cities from '../cities.js';

const CityModal = ({ index, data, closeModal }) => {
  const selectedCity = cities[index];

  return (
    <div className={`${styles.modal} ${styles.row}`}>
      <div className={styles.imageColumn}>
        <img
          alt={data.name}
          src={require(`../images/${selectedCity.imageFile}`)}
        />
      </div>
      <div className={styles.textColumn}>
        <button className={styles.btnClose} onClick={closeModal}>
          X
        </button>

        <h2 className={styles.heading}>{data.name}</h2>

        <div className={styles.weatherInfo}>
          <div className={styles.featured}>
            <p>{captializeFirstLetter(data.weather[0].description)}</p>
            <p className={styles.temp}>
              {roundOneDecimalPoint(data.main.temp)}°F
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <h4>Atmospheric pressure</h4>
              <p>{data.main.pressure.toLocaleString('en-US')} hPa</p>
            </div>

            <div className={styles.stat}>
              <h4>Humidity</h4>
              <p>{data.main.humidity}%</p>
            </div>

            <div className={styles.stat}>
              <h4>Visibility</h4>
              <p>{data.visibility.toLocaleString('en-US')} m</p>
            </div>
          </div>
        </div>

        <div className={styles.photoInfo}>
          <p className={styles.photoDescription}>
            {selectedCity.photoDescription}
          </p>
          <p>
            <a target="_blank" rel="noreferrer" href={selectedCity.photoURL}>
              Photo
            </a>{' '}
            by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href={selectedCity.photographerURL}
            >
              {selectedCity.photographer}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityModal;
