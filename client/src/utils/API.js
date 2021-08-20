import { UpdateProfileForm } from '../components/ProfileForm'

// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
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

export const updateUser = (userData) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveBook = (bookData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });
};

// remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to open weather api
// https://api.openweathermap.org/data/2.5/weather?q= {los+angeles} &appid=9b2ae69bfce6899c26e740f85827a619
export const searchOpenWeather = (userFormData) => {
  const apiKey = '9b2ae69bfce6899c26e740f85827a619'
  let city = userFormData.city
    // use these later for profile page stats container 
  // let currentTemp = Math.round(((data.main.temp - 273.15) * 9 / 5) + 32)
  // let currentHumidity = data.main.humidity + "%"
  // let currentOvercast = data.weather[0].description

  return fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey);
};


