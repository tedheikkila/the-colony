import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Jumbotron, Card } from 'react-bootstrap';

import { createPost, getFeed } from '../utils/API';
import { getMe } from '../utils/API';
import Auth from '../utils/auth';

// getting all the feed data, submits posts to the db withAuth (via user)
// city feed btn filters posts by the user's city
const Feed = () => {
  const [userData, setUserData] = useState({});
  const [feed, setFeed] = useState([]);
  const [postFormData, setPostFormData] = useState({ title: '', content: '', name: '', city: '' });
  
  const getFeedData = async () => {
      try {
        const response = await getFeed();

        const newFeed = await response.json()

        setFeed(newFeed.reverse());

      } catch (err) {
        console.error(err);
      }
  }

  const getUserData = async () => {
    try {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }
      const response = await getMe(token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      const user = await response.json();

      setUserData({ ...user, name: user.username, city: user.city });

    } catch (err) {
      console.error(err);
    }
  }

    useEffect(() => {
      getFeedData();
      getUserData();
    }, []);
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostFormData({ ...postFormData, [name]: value });
  };

  const handleCitySearch = (e) => {
    e.preventDefault()
    const filterd = feed.filter( post => {
      return post.city === userData.city
    })
    setFeed(filterd);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPost = { ...postFormData, city: userData.city, name: userData.name }
      const response = await createPost(newPost);


      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const post = await response.json();
    } catch (err) {
      console.error(err);
    }

    setPostFormData({ title: '', content: '', name: '', city: '' });
    window.location.reload(false);
  };

  return (
    <>
      <div className="row">
        <Container className="col-4 list-container">
          <div className="card">
            <ul className="list-group">
              <Jumbotron className="feeds-sidebar">Feeds</Jumbotron>
              <Form onSubmit={handleCitySearch}>
                <Button type='submit' className="city-feed-btn" value={userData.city}>City Feed</Button>
              </Form>
            </ul>
          </div>
        </Container>
        <Container className="feed-container col-8 ">
          <h2 className="the-feed">Feed</h2>
          <Form className="" onSubmit={handleFormSubmit}>
            <Form.Group className="post-title">
              <Form.Control
                type='text'
                placeholder='title'
                name='title'
                value={postFormData.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group id="post-text">
              <Form.Control
                type='text'
                placeholder='text Content'
                name='content'
                value={postFormData.content}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Button
                className="btn btn-primary"
                disabled={!(postFormData.content && postFormData.title)}
                type='submit'
                variant='success'
                id="submit-post">
                Post
              </Button>
            </Form.Group>
          </Form>
          {feed.map((post) => {
            return (
              <Card key={post._id} id="post-card">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="post-creator">created by: <span id="bold-name">{post.name}</span></Card.Text>
                  <Card.Text className="post-location">location: {post.city}</Card.Text>
                  <Card.Text className="post-content">{post.content}</Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </Container>
      </div>
    </>
  );
};

export default Feed;
