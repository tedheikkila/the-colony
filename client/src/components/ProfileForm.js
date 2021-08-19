import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { updateUser } from '../utils/API';
import Auth from '../utils/auth';

const UpdateProfileForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', planet: '', city: '', age: '', weight:'', gender: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
      const response = await updateUser(userFormData);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      // not sure if this is needed
      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
        username: '', planet: '', city: '', 
        age: '', weight:'', gender: '' 
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
          <Form.Label htmlFor='planet'>Planet</Form.Label>
          <Form.Control
            type='planet'
            placeholder='Your planet'
            name='planet'
            onChange={handleInputChange}
            value={userFormData.planet}
            required
          />
          <Form.Control.Feedback type='invalid'>Planet is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='city'>City</Form.Label>
          <Form.Control
            type='city'
            placeholder='Your city'
            name='city'
            onChange={handleInputChange}
            value={userFormData.city}
            required
          />
          <Form.Control.Feedback type='invalid'>City is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='age'>Age</Form.Label>
          <Form.Control
            type='age'
            placeholder='Your age (optional)'
            name='age'
            onChange={handleInputChange}
            value={userFormData.age}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='weight'>Weight</Form.Label>
          <Form.Control
            type='weight'
            placeholder='Your weight (optional)'
            name='weight'
            onChange={handleInputChange}
            value={userFormData.weight}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='gender'>Gender</Form.Label>
          <Form.Control
            type='gender'
            placeholder='Your gender (optional)'
            name='gender'
            onChange={handleInputChange}
            value={userFormData.gender}
          />
        </Form.Group>

        <Button
          disabled={!(userFormData.username && userFormData.planet && userFormData.city)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UpdateProfileForm;