import styles from './styles/city.module.css';

const City = ({ openModal, idx, data }) => {
  return (
    <div className={styles.city} onClick={() => openModal(idx)}>
      <img
        className={styles.city__image}
        alt={data.name}
        src={require(`./images/${data.name}.jpg`)}
      />
      <div className={styles.city__info}>
        <h2 className={styles.city__info__name}>{data.name}</h2>
        <p className={styles.city__info__temp}>
          {Math.round(data.main.temp * 10) / 10}°F
        </p>
      </div>
    </div>
  );
};

export default City;
