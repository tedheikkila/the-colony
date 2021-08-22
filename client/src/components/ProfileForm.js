import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const UpdateProfileForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: '', city: '', age: ''
  });
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
      localStorage.setItem("user", JSON.stringify(userFormData));

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '', city: '', age: ''
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
            placeholder='Your current city'
            name='city'
            onChange={handleInputChange}
            value={userFormData.city}
            required
          />
          <Form.Control.Feedback type='invalid'>City is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='age'>Age (optional)</Form.Label>
          <Form.Control
            type='number'
            placeholder='Your age'
            name='age'
            onChange={handleInputChange}
            value={userFormData.age}
          />
        </Form.Group>

        <Button
          disabled={!(userFormData.username && userFormData.city)}
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