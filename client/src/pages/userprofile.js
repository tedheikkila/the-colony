import React, { useState } from 'react';
import { Modal, Tab, Button, CardGroup, Container, Card, Alert, Form } from 'react-bootstrap';
import ProfileForm from '../components/ProfileForm';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import { getCurrentDate } from '../utils/functions'
import { searchWeatherApi } from '../utils/API'

const UserProfile = () => {

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [planet, setPlanet] = useState('Mercury');
  const [zodiac, setZodiac] = useState('Aries');
  const [showAlert, setShowAlert] = useState(false);
  const [relAge, setRelAge] = useState('');
  const [relWeight, setRelWeight] = useState('');
  const [marsAge, setMarsAge] = useState('0');
  const [marsWeight, setMarsWeight] = useState('0');

  // weather api call
  const getWeather = async () => {

    let storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData === null) {
      var query = "minneapolis"
    } else
      var query = storedUserData.city

    try {
      const response = await searchWeatherApi(query);
      const data = await response.json();
      let currentTemp = Math.round(((data.main.temp - 273.15) * 9 / 5) + 32)
      let currentHumidity = data.main.humidity
      let currentWind = data.wind.speed
      let currentOvercast = data.weather[0].description
      let currentIcon = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'

      localStorage.setItem("temp", JSON.stringify(currentTemp));
      localStorage.setItem("hum", JSON.stringify(currentHumidity));
      localStorage.setItem("wind", JSON.stringify(currentWind));
      localStorage.setItem("overcast", JSON.stringify(currentOvercast));
      localStorage.setItem("icon", JSON.stringify(currentIcon));

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };
  getWeather()

  // weather retrievals
  function getStoredTemp() {
    let storedTemp = JSON.parse(localStorage.getItem("temp"));

    if (storedTemp === null) {
      var useTemp = ""
      return useTemp
    } else
      return `${storedTemp} F`
  }
  getStoredTemp()

  function getStoredHum() {
    let storedHum = JSON.parse(localStorage.getItem("hum"));
    if (storedHum === null) {
      var useHum = ""
      return useHum
    } else
      return `${storedHum} %`
  }
  getStoredHum()

  function getStoredWind() {
    let storedWind = JSON.parse(localStorage.getItem("wind"));
    if (storedWind === null) {
      var useWind = ""
      return useWind
    } else
      return `${storedWind} mph`
  }
  getStoredWind()

  function getStoredOvercast() {
    let storedOvercast = JSON.parse(localStorage.getItem("overcast"));
    if (storedOvercast === null) {
      var useOvercast = ""
      return useOvercast
    } else
      return `${storedOvercast}`
  }
  getStoredOvercast()

  function getStoredIcon() {
    let storedIcon = JSON.parse(localStorage.getItem("icon"));
    if (storedIcon === null) {
      var useIcon = "./assets/images/weather-icon.png"
      return useIcon
    } else
      return `${storedIcon}`
  }
  getStoredOvercast()

  // planet
  const handlePlanet = (event) => {
    setPlanet(event);
    let planet = event
    localStorage.setItem("planet", JSON.stringify(planet));
  }

  function getPlanetTitle() {
    let storedPlanet = JSON.parse(localStorage.getItem("planet"));
    if (storedPlanet === null) {
      return "Astronaut"
    } else
      var userPlanet = storedPlanet.charAt(0).toUpperCase() + storedPlanet.slice(1);
    return userPlanet
  }
  getPlanetTitle()

  function getPlanetImg() {
    let storedPlanet = JSON.parse(localStorage.getItem("planet"));

    if (storedPlanet === null) {
      return `./assets/images/planet-icons.png`
    }

    switch (storedPlanet) {
      case "space drifter" || "" || null:
        return `./assets/images/planet-icons.png`

      case "mercury":
        return `./assets/images/mercury.png`

      case "venus":
        return `./assets/images/venus.png`

      case "earth":
        return `./assets/images/earth.png`

      case "mars":
        return `./assets/images/mars.png`

      case "jupiter":
        return `./assets/images/jupiter.png`

      case "saturn":
        return `./assets/images/saturn.png`

      case "uranus":
        return `./assets/images/uranus.png`

      case "neptune":
        return `./assets/images/neptune.png`

      default:
        return `./assets/images/planet-icons.png`
    }
  }
  getPlanetImg()

  // zodiac
  const handleZodiac = (event) => {
    setZodiac(event);
    let zodiac = event
    localStorage.setItem("zodiac", JSON.stringify(zodiac));
  }

  function getZodiacTitle() {
    let storedZodiac = JSON.parse(localStorage.getItem("zodiac"));
    if (storedZodiac === null) {
      return "ET"
    }
    var userZodiac = storedZodiac.charAt(0).toUpperCase() + storedZodiac.slice(1);
    return userZodiac
  }
  getZodiacTitle()

  function getZodiacImg() {
    let storedZodiac = JSON.parse(localStorage.getItem("zodiac"));

    if (storedZodiac === null) {
      return `./assets/images/zodiac-icons.png`
    }

    switch (storedZodiac) {
      case "ET" || "" || null:
        return `./assets/images/zodiac-icons.png`

      case "aries":
        return `./assets/images/aries.png`

      case "taurus":
        return `./assets/images/taurus.png`

      case "gemini":
        return `./assets/images/gemini.png`

      case "cancer":
        return `./assets/images/cancer.png`

      case "leo":
        return `./assets/images/leo.png`

      case "virgo":
        return `./assets/images/virgo.png`

      case "libra":
        return `./assets/images/libra.png`

      case "scorpio":
        return `./assets/images/scorpio.png`

      case "sagittarius":
        return `./assets/images/sagittarius.png`

      case "capricorn":
        return `./assets/images/capricorn.png`

      case "aquarius":
        return `./assets/images/aquarius.png`

      case "pisces":
        return `./assets/images/pisces.png`

      default:
        return `./assets/images/zodiac-icons.png`
    }
  }
  getZodiacImg()

  // update profile form
  function getUsername() {
    let storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData === null) {
      let username = "Username"
      return username
    } else
      return storedUserData.username
  }
  getUsername()

  function getUserCity() {
    let storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData === null) {
      let city = "Minneapolis"
      return city
    }
    let storedCity = storedUserData.city
    let userCity = storedCity.charAt(0).toUpperCase() + storedCity.slice(1);
    return userCity
  }
  getUserCity()

  function getUserAge() {
    let storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData === null) {
      let age = "TBD"
      return age
    }
    if (storedUserData.age === "") {
      return `immortal`
    } else
      return storedUserData.age
  }
  getUserAge()

  
  const handleRelAge = (e) => {
    const { target } = e;
    const inputValue = target.value;

    setRelAge(inputValue);

    let marsAge = Math.round(inputValue * 0.52)

    setMarsAge(`${marsAge} years`)
  };

  const handleRelWeight = (e) => {
    const { target } = e;
    const inputValue = target.value;

    setRelWeight(inputValue);

    let marsWeight = Math.round(inputValue * 0.38)

    setMarsWeight(`${marsWeight} lbs`)
  };

  return (
    <>

      <Alert id="profile-alert" dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        Please enter a valid city
      </Alert>

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
            <Dropdown.Item eventKey="astronaut">Astronaut</Dropdown.Item>
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
            <h4>{getPlanetTitle()}</h4>
            <img className="planet-img" src={getPlanetImg()} height="300" width="300" alt="Planet" />
          </div>
        </Card>
        <Card className="username-card">
          <h3 className="card-header" id="username-header">{getUsername()}</h3>
          <div className="card-body">
            <h4 className="body-title">{getUserCity()}</h4>
            <p className="user-text">Age: {getUserAge()}</p>
            <p className="date-text">{getCurrentDate()}</p>
            <span className="overcast-text">{getStoredOvercast()}</span>
            <img className="icon-text" src={getStoredIcon()} width="70" height="70" alt="Weather Icon"></img>
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
            onSelect={handleZodiac}
          >
            <Dropdown.Item eventKey="ET">ET</Dropdown.Item>
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

          <div className="card-body">
            <h4>{getZodiacTitle()}</h4>
            <img className="zodiac-img" src={getZodiacImg()} height="300" width="300" alt="Zodiac" />
          </div>
        </Card>
      </CardGroup>

      <Form className="form age-calculator">
        <input
          type="number"
          value={relAge}
          onChange={handleRelAge}
          id="rel-age-input"
          name="relAge"
          placeholder="Type your age"
        />
        <Button variant="outline-secondary" id="button-addon1" className="rel-age-btn">
            Martian age = {marsAge}
        </Button>
      </Form>

      <Form className="age-calculator">
        <input
          type="number"
          value={relWeight}
          onChange={handleRelWeight}
          id="rel-age-input"
          name="relWeight"
          placeholder="Type your weight, lbs"
        />
        <Button variant="outline-secondary" id="button-addon1" className="rel-age-btn">
            Martian weight = {marsWeight}
        </Button>
      </Form>
    </>
  );
}

export default UserProfile;