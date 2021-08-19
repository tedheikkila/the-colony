import React, { useState } from 'react';
import { Modal, Tab, Button } from 'react-bootstrap';
import ProfileForm from '../components/ProfileForm';

const ProfileUpdate = () => {
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
                        <Tab.Content>
                            <Tab.Pane eventKey='update-profile'>
                                <ProfileForm handleModalClose={() => setShowProfileModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
            </Modal>
        </>
    );
};

export default ProfileUpdate;
