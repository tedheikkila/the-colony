import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';

// import { updateUser } from '../utils/API';
// import Auth from '../utils/auth';

const UpdateProfileForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: '', planet: '', city: '',
    zodiac: '', age: '', weight: '', gender: ''
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
      username: '', planet: '', city: '', zodiac: '',
      age: '', weight: '', gender: ''
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
            placeholder='Your city'
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

        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender (optional)
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
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