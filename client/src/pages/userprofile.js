import React, { useState } from 'react';
import { Modal, Tab, Button, CardGroup, Container, Card } from 'react-bootstrap';
import ProfileForm from '../components/ProfileForm';
// import Auth from '../utils/auth';
// import { saveBook, searchGoogleBooks } from '../utils/API';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const UserProfile = () => {
  
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <>
      <Container className = "edit-profile-btn-ctn">
        <Button bg='dark' variant='dark' id="edit-profile-btn"
          onClick={() => setShowProfileModal(true)}>Edit Profile
        </Button>
      </Container>
      {/* set profile update modal up */}
      <Modal
        size='lg'
        show={showProfileModal}
        onHide={() => setShowProfileModal(false)}
        aria-labelledby='update-profile-modal'>
        <Modal.Header closeButton>
          <Modal.Title id='update-profile-modal'> Edit profile
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
            <h4>Earth</h4>
            <img className="planet-img" src="./assets/images/planet-icons.png" height="300" width="300" alt="Planet"/>
          </div>
        </Card>
        <Card className="username-card">
          <h3 className="card-header" id="username-header">Username</h3>
          <div className="card-body">
            <h4 className="body-title">City</h4>
            <p className="body-text">Date</p>
            <p className="body-text">Temp: 50 F</p>
            <p className="body-text">Humidity: 50%</p>
            <p className="body-text">Wind: 5 mph</p>
          </div>
        </Card>
        <Card className="zodiac-card">
          <h3 className="card-header" id="zodiac-header">Zodiac</h3>
          <div className="card-body">
            <h4>Sign</h4>
            <img className="zodiac-img" src="./assets/images/zodiac-icons.png" height="300" width="300" alt="Zodiac"/>
          </div>
        </Card>
      </CardGroup>




    </>
  );
}

export default UserProfile;