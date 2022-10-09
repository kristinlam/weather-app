import styles from '../styles/modal.module.css';
import { captializeFirstLetter, roundOneDecimalPoint } from '../helpers';
import cities from '../cities.js';

const CityModal = ({ index, data, closeModal }) => {
  const selectedCity = cities[index];

  return (
    <div className={`${styles.modal} ${styles.row}`}>
      <div className={`${styles.image__container} ${styles.column}`}>
        <img
          alt={data.name}
          src={require(`../images/${selectedCity.imageFile}`)}
        />
      </div>
      <div className={`${styles.text__container} ${styles.column}`}>
        <button className={styles.btn__close} onClick={closeModal}>
          X
        </button>

        <div className={styles.weatherInfo}>
          <h2>{data.name}</h2>
          <div>
            <p>{captializeFirstLetter(data.weather[0].description)}</p>
            <p>{roundOneDecimalPoint(data.main.temp)}°F</p>
          </div>

          <div>
            <div>
              <h4>Atmospheric pressure</h4>
              <p>{data.main.pressure.toLocaleString('en-US')} hPa</p>
            </div>

            <div>
              <h4>Humidity</h4>
              <p>{data.main.humidity}%</p>
            </div>

            <div>
              <h4>Visibility</h4>
              <p>{data.visibility.toLocaleString('en-US')} m</p>
            </div>
          </div>
        </div>

        <div className={styles.photoInfo}>
          <hr />
          <p>{selectedCity.photoDescription}</p>
          <p>
            Photo by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://unsplash.com/${selectedCity.photographerHandle}`}
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
