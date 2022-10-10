import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <div className="heading">
        <h1 className="title">Weatherful</h1>
        <h2 className="subtitle">
          A weather dashboard for the ten most visited cities
        </h2>
      </div>

      <Dashboard />
      <div className="sources">
        <p>
          Weather data from{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://openweathermap.org/"
          >
            OpenWeatherMap
          </a>
        </p>
        <p>
          City rankings from{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.bloomberg.com/news/articles/2019-12-03/these-are-the-world-s-most-popular-city-destinations-in-2019"
          >
            Bloomberg
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
