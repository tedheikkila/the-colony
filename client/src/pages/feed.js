import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Jumbotron, Card } from 'react-bootstrap';

import { createPost, addPostToUser, getFeed } from '../utils/API';
import { getMe } from '../utils/API';
import Auth from '../utils/auth';

const Feed = () => {
  const [userData, setUserData] = useState({});
  const [feed, setFeed] = useState([]);
  const [postFormData, setPostFormData] = useState({ title: '', content: '', name: '', city: '' });
  
  const getFeedData = async () => {
      try {
        const response = await getFeed();

        const newFeed = await response.json()
        // console.log(newFeed);
        setFeed(newFeed.reverse());
        // console.log(feed)
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
      // console.log(response);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const user = await response.json();
      // console.log(user)

      // console.log(userData)
      setUserData({ ...user, name: user.username, city: user.city });
      // console.log(userData)

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
    console.log(JSON.stringify(filterd))
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
      console.log(post);
      // const updatedUserData = await addPostToUser(post)
    } catch (err) {
      console.error(err);
    }
    // console.log(postFormData)

    setPostFormData({ title: '', content: '', name: '', city: '' });
    window.location.reload(false);
  };
  console.log(userData)

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
        <Container className="feed-container col-8">
          <h2 className="the-feed">The Feed</h2>
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

            <Form.Group className="post-title">
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
                id="t-login-modal-btn">
                Post
              </Button>
            </Form.Group>
          </Form>
          {feed.map((post) => {
            return (
              <Card key={post._id}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>location:{post.city}  created by:{post.name}</Card.Text>
                  <Card.Text>{post.content}</Card.Text>
                </Card.Body>
              </Card>
            )
          })}
          {/* <Form className="post-form" onSubmit={handleFormSubmit} >
            <textarea className="post-title" placeholder="Post title"></textarea>
            <textarea className="post-text" placeholder="Send message to Feed"></textarea>
            <Button className="btn btn-primary" type="submit" id="submit-post">Send it</Button>
          </Form> */}
        </Container>
      </div>
    </>
  );
};

export default Feed;
