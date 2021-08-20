import React, { useState } from 'react';
import { Modal, Tab, Button, CardGroup } from 'react-bootstrap';
import ProfileForm from '../components/ProfileForm';
// import Auth from '../utils/auth';
// import { saveBook, searchGoogleBooks } from '../utils/API';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const UserProfile = () => {
  
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <>

      <Button bg='dark' variant='dark'
        onClick={() => setShowProfileModal(true)}>Edit Profile
      </Button>
      {/* set profile update modal up */}
      <Modal
        size='lg'
        show={showProfileModal}
        onHide={() => setShowProfileModal(false)}
        aria-labelledby='update-profile-modal'>
        <Modal.Header closeButton>
          <Modal.Title id='update-profile-modal'> Update profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Tab.Pane eventKey='update-profile'>
              <ProfileForm handleModalClose={() => setShowProfileModal(false)} />
            </Tab.Pane>
        </Modal.Body>
      </Modal>

      <div className="user-container">
      <CardGroup>
        <div className="card">
          <h3 className="card-header" id="interests-header">Planet</h3>
          <div className="card-body">
            <h4 className="card-title">App development</h4>
            <p className="card-text">entertainment</p>
            <p className="card-text">music</p>
            <p className="card-text">niche necessities</p>
            <h4 className="card-title">Web design</h4>
            <p className="card-text">food/textiles</p>
            <p className="card-text">e-commerce</p>
            <p className="card-text">renewable energy</p>
          </div>
        </div>
        <div className="card" id="img-card">
          <img className="avatar-img" src="./assets/images/avatar.png" height="300" width="200" alt="Avatar Icon"/>
          <div className="card-body">
            <h4 className="card-title" id="status-title">Status</h4>
            <p className="card-text">
              UMN coding student developer
            </p>
          </div>
        </div>
        <div className="card">
          <h3 className="card-header" id="hobbies-header">Hobbies</h3>
          <div className="card-body">
            <ul className="list-group" id="hobbies-body">
              <li className="list-group-item">Running</li>
              <li className="list-group-item" id="even-hobbies">Coding</li>
              <li className="list-group-item">Gaming</li>
              <li className="list-group-item" id="even-hobbies">Music</li>
              <li className="list-group-item">Anime</li>
            </ul>
          </div>
        </div>
      </CardGroup>
    </div>




    </>
  );
}

export default UserProfile;