import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const appNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      
    </div>
  );
};

export default appNavbar;
