import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

// import { getMe, deletePost } from '../utils/API';
// import Auth from '../utils/auth';
// import { removePostId } from '../utils/localStorage';

function feed() {

  return (
    <>
      <Form className="post-form">
        <textarea className="post-text" placeholder="Type post here"></textarea>
        <Button className="btn btn-primary" type="submit" id="submit-post">Send it</Button>
      </Form>
    </>
  );
};

export default feed;