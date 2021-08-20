import React, { useState } from 'react';
import { Modal, Tab, Button } from 'react-bootstrap';
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
        {/* tab container to do either signup or login component */}
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
    </>
  );
}

export default UserProfile;