import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
// import { updateUser } from '../utils/API';
// import Auth from '../utils/auth';

const UpdateProfileForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: '', planet: '', city: '',
    zodiac: '', age: '', weight: '', gender: ''
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [value, setValue] = useState('');

  const handleSelect = (event) => {
    console.log(event);
    setValue(event);



    localStorage.setItem("gender", JSON.stringify(event));

  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      localStorage.setItem("user", JSON.stringify(userFormData));

      // const response = await updateUser(userFormData);

      // if (!response.ok) {
      //   throw new Error('Something went wrong');
      // }

      // not sure if this is needed
      // const { token, user } = await response.json();
      // console.log(user);
      // Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '', planet: '', city: '', zodiac: '',
      age: '', weight: '', gender: ''
    });
  };

  return (
    <>
      {/* needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your update
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='city'>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your city'
            name='city'
            onChange={handleInputChange}
            value={userFormData.city}
            required
          />
          <Form.Control.Feedback type='invalid'>City is required</Form.Control.Feedback>
        </Form.Group>

        <DropdownButton
          alignRight
          title="Choose Gender"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
          value={userFormData.gender}
        >
          <Dropdown.Item eventKey="male">Male</Dropdown.Item>
          <Dropdown.Item eventKey="female">Female</Dropdown.Item>
        </DropdownButton>

        <br></br>

        <Form.Group>
          <Form.Label htmlFor='planet'>Choose Planet</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your favorite planet'
            name='planet'
            onChange={handleInputChange}
            value={userFormData.planet}
            required
          />
          <Form.Control.Feedback type='invalid'>Planet is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='zodiac'>Choose Zodiac</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your zodiac sign'
            name='zodiac'
            onChange={handleInputChange}
            value={userFormData.zodiac}
            required
          />
          <Form.Control.Feedback type='invalid'>Zodiac is required</Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={!(userFormData.username && userFormData.planet && userFormData.city && userFormData.zodiac)}
          type='submit'
          variant='success'
          id="profile-btn-submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UpdateProfileForm;