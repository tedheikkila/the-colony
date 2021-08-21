import React, { useState } from 'react';
import { Modal, Tab, Button, CardGroup, Container, Card } from 'react-bootstrap';
import ProfileForm from '../components/ProfileForm';

// import Auth from '../utils/auth';
import { getCurrentDate } from '../utils/functions'
import { searchWeatherApi } from '../utils/API'

const UserProfile = () => {
  
  const [showProfileModal, setShowProfileModal] = useState(false);

  // weather api call and respective localStorage fcns
  const getWeather = async () => {

      let storedUserData = JSON.parse(localStorage.getItem("user"));
      let query = storedUserData.city
      const response = await searchWeatherApi(query);
      const data = await response.json();
      let currentTemp = Math.round(((data.main.temp - 273.15) * 9 / 5) + 32)
      let currentHumidity = data.main.humidity
      let currentWind = data.wind.speed
      let currentOvercast = data.weather[0].description
      localStorage.setItem("temp", JSON.stringify(currentTemp));
      localStorage.setItem("hum", JSON.stringify(currentHumidity));
      localStorage.setItem("wind", JSON.stringify(currentWind));
      localStorage.setItem("overcast", JSON.stringify(currentOvercast));
  };
  getWeather()

  function getStoredTemp() {
    let storedTemp = JSON.parse(localStorage.getItem("temp"));
    return `${storedTemp} F`
  }
  getStoredTemp()

  function getStoredHum() {
    let storedHum = JSON.parse(localStorage.getItem("hum"));
    return `${storedHum} %`
  }
  getStoredHum()

  function getStoredWind() {
    let storedWind= JSON.parse(localStorage.getItem("wind"));
    return `${storedWind} mph`
  }
  getStoredWind()

  function getStoredOvercast() {
    let storedOvercast= JSON.parse(localStorage.getItem("overcast"));
    return `${storedOvercast}`
  }
  getStoredOvercast()

  // update profile fcns
  function getUsername() {
    let storedUserData = JSON.parse(localStorage.getItem("user"));
    return storedUserData.username
  }
  getUsername()

  function getUserCity() {
    let storedUserData = JSON.parse(localStorage.getItem("user"));
    return storedUserData.city
  }
  getUserCity()

  function getUserPlanet() {
    let storedUserData = JSON.parse(localStorage.getItem("user"));
    return storedUserData.planet
  }
  getUserPlanet()

  function getUserZodiac() {
    let storedUserData = JSON.parse(localStorage.getItem("user"));
    return storedUserData.zodiac
  }
  getUserZodiac()

  return (
    <>
      <Container className = "edit-profile-btn-ctn">
        <Button id="edit-profile-btn"
          onClick={() => setShowProfileModal(true)}>Launch Profile
        </Button>
      </Container>
      {/* set profile update modal up */}
      <Modal
        size='lg'
        show={showProfileModal}
        onHide={() => setShowProfileModal(false)}
        aria-labelledby='update-profile-modal'>
        <Modal.Header closeButton>
          <Modal.Title id='update-profile-modal'> Launch profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Tab.Pane eventKey='update-profile'>
              <ProfileForm handleModalClose={() => setShowProfileModal(false)} />
            </Tab.Pane>
        </Modal.Body>
      </Modal>

      <CardGroup className="profile-cardgroup">
        <Card className="planet-card">
          <h3 className="card-header" id="planet-header">Planet</h3>
          <div className="card-body">
            <h4>{getUserPlanet()}</h4>
            <img className="planet-img" src="./assets/images/planet-icons.png" height="300" width="300" alt="Planet"/>
          </div>
        </Card>
        <Card className="username-card">
          <h3 className="card-header" id="username-header">{getUsername()}</h3>
          <div className="card-body">
            <h4 className="body-title">{getUserCity()}</h4>
            <p className="body-text">{getCurrentDate()}</p>
            <p className="overcast-text">{getStoredOvercast()}</p>
            <p className="temp-text">Temp: {getStoredTemp()}</p>
            <p className="hum-text">Humidity: {getStoredHum()}</p>
            <p className="wind-text">Wind: {getStoredWind()}</p>
          </div>
        </Card>
        <Card className="zodiac-card">
          <h3 className="card-header" id="zodiac-header">Zodiac</h3>
          <div className="card-body">
            <h4>{getUserZodiac()}</h4>
            <img className="zodiac-img" src="./assets/images/zodiac-icons.png" height="300" width="300" alt="Zodiac"/>
          </div>
        </Card>
      </CardGroup>

    </>
  );
}

export default UserProfile;