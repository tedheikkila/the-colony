// import { UpdateProfileForm } from '../components/ProfileForm'
// import axios from 'axios';

// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const getFeed = () => {
  return fetch('/api/users/feed', {
  headers: {
    'Content-Type': 'application/json',
  },
});
};

export const getColonies = () => {
  return fetch('/api/colonies', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};
export const createPost = (postData) => {
  return fetch('/api/users/feed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
};
export const addPostToUser = (data) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify(data),
  });
};

// export const updateUser = (userData) => {
//   return fetch('/api/users', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const updateUser = (userData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }, 
    body: JSON.stringify(userData),
  });
};

export const deletePost = (postId, token) => {
  return fetch(`/api/users/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const searchAPOD = () => {
  return fetch('https://api.nasa.gov/planetary/apod?api_key=v1vqd0PdgPpMhpKjaxObGA6dQtpp5g5KweeYDx7O')
};

export const searchRoverImg = () => {
  return fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=v1vqd0PdgPpMhpKjaxObGA6dQtpp5g5KweeYDx7O')
}

// make a search to open weather api
// https://api.openweathermap.org/data/2.5/weather?q= {los+angeles} &appid=9b2ae69bfce6899c26e740f85827a619 
export const searchWeatherApi = (query) => {
  const apiKey = '9b2ae69bfce6899c26e740f85827a619'
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`);
};








