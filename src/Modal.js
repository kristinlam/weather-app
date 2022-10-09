import styles from './styles/modal.module.css';

const Modal = ({ closeModal, data }) => {
  const weather = data.weather[0];

  return (
    <div className={`${styles.modal} ${styles.row}`}>
      <div className={`${styles.image__container} ${styles.column}`}>
        <img alt={data.name} src={require(`./images/${data.name}.jpg`)} />
        <a href="https://unsplash.com/@guphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Thana Gu
        </a>
      </div>
      <div className={`${styles.text__container} ${styles.column}`}>
        <button className={styles.btn__close} onClick={closeModal}>
          X
        </button>

        <div className={styles.weather}>
          <h2>{data.name}</h2>
          <div>
            <p>
              {weather.description.charAt(0).toUpperCase() +
                weather.description.slice(1)}
            </p>

            <p>{Math.round(data.main.temp * 10) / 10}°F</p>
          </div>

          <div>
            <div>
              <h3>Atmospheric pressure</h3>
              <p>{data.main.pressure.toLocaleString('en-US')} hPa</p>
            </div>

            <div>
              <h3>Humidity</h3>
              <p>{data.main.humidity}%</p>
            </div>

            <div>
              <h3>Visibility</h3>
              <p>{data.visibility.toLocaleString('en-US')} m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
