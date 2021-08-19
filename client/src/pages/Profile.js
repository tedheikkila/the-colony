import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Modal, Tab, Button } from 'react-bootstrap';
import ProfileForm from '../components/ProfileForm';

import Auth from '../utils/auth';

const ProfileUpdate = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <>
      <Button bg='dark' variant='dark' >
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Books
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowProfileModal(true)}>Edit Profile</Nav.Link>
              )}
      </Button>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showProfileModal}
        onHide={() => setShowProfileModal(false)}
        aria-labelledby='update-profile-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowProfileModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <ProfileForm handleModalClose={() => setShowProfileModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default ProfileUpdate;
