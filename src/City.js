import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

const City = ({ name }) => {
  const [city, setCity] = useState(null);
  const [modal, setModal] = useState({ show: false, data: null });

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fe401b4fb11016097b8ab6892da9c0a4&units=imperial`
      )
      .then((res) => {
        setCity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModal = () => {
    console.log('open modal city', city);
    setModal({ show: true, data: city });
  };

  const closeModal = () => {
    setModal({ show: false, data: null });
    console.log('close modal city', city);
  };

  return (
    <div className="container">
      <div className="city" onClick={openModal}>
        {city ? (
          <div>
            <img
              style={{ maxWidth: 200 }}
              className="city__image"
              alt={city.name}
              src={require(`./images/${city.name}.jpg`)}
            />

            <div className="city__info">
              <h2 className="city__info--name">{city.name}</h2>
              <p className="city__info--temp">
                {Math.round(city.main.temp * 10) / 10}°F
              </p>
            </div>
          </div>
        ) : null}
      </div>
      {modal.show && modal.data && (
        <Modal closeModal={closeModal} data={modal.data} />
      )}
    </div>
  );
};

export default City;
