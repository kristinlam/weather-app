const Modal = ({ closeModal, data }) => {
  console.log('data', data);
  const weather = data.weather[0];

  return (
    <div className="modal">
      <button className="btn btn--close" onClick={() => closeModal()}>
        X
      </button>
      <h2>{data.name}</h2>
      <p>
        {weather.description.charAt(0).toUpperCase() +
          weather.description.slice(1)}
      </p>
      <p>{Math.round(data.main.temp * 10) / 10}°F</p>
      <p>
        Atmospheric pressure: {data.main.pressure.toLocaleString('en-US')} hPa
      </p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Visibility: {data.visibility.toLocaleString('en-US')} m</p>
    </div>
  );
};

export default Modal;
