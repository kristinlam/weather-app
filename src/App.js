// const URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.REACT_APP_API_KEY}`;
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=fe401b4fb11016097b8ab6892da9c0a4;`;

function App() {
  console.log('the url is:', URL);
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
