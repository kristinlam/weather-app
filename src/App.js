import City from './City';

const citiesArray = ['Fuzhou, CN', 'Hong Kong, CN', 'New York, US'];

function App() {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="home" style={{ display: 'flex' }}>
        {citiesArray.map((el, idx) => (
          <City name={el} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
