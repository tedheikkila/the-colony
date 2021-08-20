import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

function roverProfile () {

  return (
    <div>

      <div class="card">
        <img class="round" src="./assets/mars.jpg" alt="Card image" />
      </div>

    </div>
  );
};

export default roverProfile;
