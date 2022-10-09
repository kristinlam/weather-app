import styles from '../styles/CityCard.module.css';
import { roundOneDecimalPoint } from '../helpers';
import cities from '../cities.js';

const CityCard = ({ index, data, openModal }) => {
  return (
    <div className={styles.city} onClick={() => openModal(index)}>
      <img
        className={styles.city__image}
        alt={data.name}
        src={require(`../images/${cities[index].imageFile}`)}
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

export default CityCard;
