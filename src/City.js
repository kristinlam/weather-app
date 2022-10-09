import styles from './styles/city.module.css';
import { roundOneDecimalPoint } from './helpers';

const City = ({ openModal, idx, data }) => {
  return (
    <div className={styles.city} onClick={() => openModal(idx)}>
      <img
        className={styles.city__image}
        alt={data.name}
        src={require(`./images/${data.name}.jpg`)}
      />
      <div className={styles.city__info}>
        <p className={styles.city__info__temp}>
          {roundOneDecimalPoint(data.main.temp)}°F
        </p>
        <h2 className={styles.city__info__name}>{data.name}</h2>
      </div>
    </div>
  );
};

export default City;
