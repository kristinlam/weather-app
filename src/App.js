import City from './City';

const citiesArray = ['Fuzhou, CN', 'Hong Kong, CN', 'New York, US'];

function App() {
  return (
    <div className="app" style={{ display: 'flex' }}>
      {citiesArray.map((el, idx) => (
        <City name={el} key={idx} />
      ))}
    </div>
  );
}

export default App;
