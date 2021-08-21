import React, { } from 'react';
import { } from 'react-bootstrap';

function roverProfile () {

  return (
    <div>
      <div className="margin">
          <div className="row margin">
              <div className="col-md-12">
                  <div className="page-header">
                      <h1>
                          Rover
                      </h1>
                  </div>
              </div>
          </div>
          <div className="row margin">
              <div className="col-md-4">
                  <div className="media item">
                      <img className="mr-3 round" alt="Mars" src="./assets/mars.jpg"/>
                  </div>
              </div>
              <div className="col-md-4">
                <div className="media item">
                  <img alt="Selfie" className="mr-3" src="./assets/mainselfie.jpg" width="200" height="250"/>
                </div>
              </div>
              <div className="col-md-4">
                  <div className="card stats">
                      <h5 className="card-header">
                          Mars Stats
                      </h5>
                      <div className="card-body">
                          <p className="card-text">
                              Mars stats will go here
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div>
          <div className= "grid">
              <img alt="Mars" src="./assets/roverselfie.jpg" width="300" height="200"/>
              <img alt="Mars" src="./assets/ripples.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/meteorite.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/tracks.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/crystals.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/rock.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/portrait.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/mountsharp.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/slates.jpg" width="200" height="200" />
          </div>
      </div>
    </div>
  );
};

export default roverProfile;
