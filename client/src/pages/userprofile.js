import React, { useState } from 'react';
import { Modal, Tab, Button, CardGroup, Container, Card } from 'react-bootstrap';
import ProfileForm from '../components/ProfileForm';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

// import Auth from '../utils/auth';
import { getCurrentDate } from '../utils/functions'
import { searchWeatherApi } from '../utils/API'

const UserProfile = () => {

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [value, setValue] = useState('');

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
    let storedWind = JSON.parse(localStorage.getItem("wind"));
    return `${storedWind} mph`
  }
  getStoredWind()

  function getStoredOvercast() {
    let storedOvercast = JSON.parse(localStorage.getItem("overcast"));
    return `${storedOvercast}`
  }
  getStoredOvercast()

  // planet & zodiac

  const handlePlanet = (event) => {
    setValue(event);
    let planet = event
    localStorage.setItem("planet", JSON.stringify(planet));
  }

  function getPlanet() {
    let storedPlanet = JSON.parse(localStorage.getItem("planet"));
    let userPlanet = storedPlanet.charAt(0).toUpperCase() + storedPlanet.slice(1);
    return userPlanet
  }
  getPlanet()

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

  function getUserAge() {
    let storedUserData = JSON.parse(localStorage.getItem("user"));
    return storedUserData.age
  }
  getUserAge()

  function getUserZodiac() {
    let storedUserData = JSON.parse(localStorage.getItem("user"));
    return storedUserData.zodiac
  }
  getUserZodiac()

  

  return (
    <>
      <Container className="edit-profile-btn-ctn">
        <Button id="edit-profile-btn"
          onClick={() => setShowProfileModal(true)}>Launch Profile
        </Button>
      </Container>

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

        <DropdownButton
          alignRight
          title="Select Planet"
          id="dropdown-menu-align-left"
          onSelect={handlePlanet}
        >
          <Dropdown.Item eventKey="mercury">Mercury</Dropdown.Item>
          <Dropdown.Item eventKey="venus">Venus</Dropdown.Item>
          <Dropdown.Item eventKey="earth">Earth</Dropdown.Item>
          <Dropdown.Item eventKey="mars">Mars</Dropdown.Item>
          <Dropdown.Item eventKey="jupiter">Jupiter</Dropdown.Item>
          <Dropdown.Item eventKey="saturn">Saturn</Dropdown.Item>
          <Dropdown.Item eventKey="uranus">Uranus</Dropdown.Item>
          <Dropdown.Item eventKey="neptune">Neptune</Dropdown.Item>
        </DropdownButton>

          <div className="card-body">
            <h4>{getPlanet()}</h4>
            <img className="planet-img" src="./assets/images/planet-icons.png" height="300" width="300" alt="Planet" />
          </div>
        </Card>
        <Card className="username-card">
          <h3 className="card-header" id="username-header">{getUsername()}</h3>
          <div className="card-body">
            <h4 className="body-title">{getUserCity()}</h4>
            <p className="user-text">Age: {getUserAge()}</p>
            <p className="date-text">{getCurrentDate()}</p>
            <p className="overcast-text">{getStoredOvercast()}</p>
            <p className="temp-text">Temp: {getStoredTemp()}</p>
            <p className="hum-text">Humidity: {getStoredHum()}</p>
            <p className="wind-text">Wind: {getStoredWind()}</p>
          </div>
        </Card>
        <Card className="zodiac-card">
        <DropdownButton
          alignRight
          title="Select Zodiac"
          id="dropdown-menu-align-center"
          // onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="aries">Aries</Dropdown.Item>
          <Dropdown.Item eventKey="taurus">Taurus</Dropdown.Item>
          <Dropdown.Item eventKey="gemini">Gemini</Dropdown.Item>
          <Dropdown.Item eventKey="cancer">Cancer</Dropdown.Item>
          <Dropdown.Item eventKey="leo">Leo</Dropdown.Item>
          <Dropdown.Item eventKey="virgo">Virgo</Dropdown.Item>
          <Dropdown.Item eventKey="libra">Libra</Dropdown.Item>
          <Dropdown.Item eventKey="scorpio">Scorpio</Dropdown.Item>
          <Dropdown.Item eventKey="sagittarius">Sagittarius</Dropdown.Item>
          <Dropdown.Item eventKey="capricorn">Capricorn</Dropdown.Item>
          <Dropdown.Item eventKey="aquarius">Aquarius</Dropdown.Item>
          <Dropdown.Item eventKey="pisces">Pisces</Dropdown.Item>
        </DropdownButton>

          {/* <h3 className="card-header" id="zodiac-header">Zodiac</h3> */}
          <div className="card-body">
            <h4>{getUserZodiac()}</h4>
            <img className="zodiac-img" src="./assets/images/zodiac-icons.png" height="300" width="300" alt="Zodiac" />
          </div>
        </Card>
      </CardGroup>

    </>
  );
}

export default UserProfile;