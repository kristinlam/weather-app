import City from './City';
import styles from './styles/app.module.css';

const citiesArray = ['Fuzhou, CN', 'Hong Kong, CN', 'New York, US'];

function App() {
  return (
    <div className="app">
      <h1 className={styles.title}>Weather App</h1>
      <div className={styles.home}>
        {citiesArray.map((el, idx) => (
          <City name={el} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
