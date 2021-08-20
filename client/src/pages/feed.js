import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Jumbotron} from 'react-bootstrap';

// import { getMe, deletePost } from '../utils/API';
// import Auth from '../utils/auth';
// import { removePostId } from '../utils/localStorage';

function feed() {

  return (
    <>
      <div className="row">
        <Container className="col-4 list-container">
          <div className="card">
            <ul className="list-group">
              <Jumbotron className="feeds-sidebar">Feeds</Jumbotron>
              <Button className="city-feed-btn">City Feed</Button>
            </ul>
          </div>
        </Container>
        <Container className="feed-container col-8">
          <h2 className="the-feed">The Feed</h2>
          <Form className="post-form">
            <textarea className="post-text" placeholder="Send message to Feed"></textarea>
            <Button className="btn btn-primary" type="submit" id="submit-post">Send it</Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default feed;