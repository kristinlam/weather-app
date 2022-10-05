import axios from 'axios';

const searchCity = (city) => {
  axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=fe401b4fb11016097b8ab6892da9c0a4`
    )
    .then((res) => {
      console.log(res.data);
    });
};

const citiesArray = ['Fuzhou', 'Hong Kong', 'New York'];

citiesArray.forEach(searchCity);

function App() {
  return (
    <div className="app">
      <div className="city">
        <img
          style={{ maxWidth: 200 }}
          className="city__image"
          alt="Fuzhou"
          src={require(`./images/fuzhou.jpg`)}
        />
        <div className="city__info">
          <p className="city__info--name">Fuzhou</p>
          <p className="city__info--temp">90 degrees</p>
        </div>
      </div>
    </div>
  );
}

export default App;
