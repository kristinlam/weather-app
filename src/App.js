import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <div className="heading">
        <h1 className="title">Weather App</h1>
        <div className="description">
          <p>Today's weather for the top 10 most visited cities</p>
          <p>
            Weather data from OpenWeatherMap API, city data from Bloomberg, and
            photos from Unsplash
          </p>
        </div>
      </div>

      <Dashboard />
    </div>
  );
}

export default App;
