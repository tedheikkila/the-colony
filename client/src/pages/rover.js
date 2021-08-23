import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';







function RoverProfile() {

    const [roverImage, setRoverImage] = useState([]);

    useEffect(() => {

        searchRoverImg();

        async function searchRoverImg() {
            const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=v1vqd0PdgPpMhpKjaxObGA6dQtpp5g5KweeYDx7O')
            const data = await response.json();

            setRoverImage(data);
            const arrayCopy = roverImage.slice(0,9);
            setRoverImage(arrayCopy);
            console.log(roverImage);
            // console.log(data);
            for (var i = 0; i < 8; i++) {

                const imageData = data.photos[i].img_src;
                console.log(imageData);
                let storedImage = JSON.parse(localStorage.getItem("image"));
                let restoredImage = localStorage.setItem("image", JSON.stringify(imageData));
                setRoverImage()            }

        }
    }, []);

    function getStoredImg() {
        let storedImage = JSON.parse(localStorage.getItem("image"));
        if (image === null) {
            var image = ""
            return image
        } else
            return `${storedImage} `
    }
    getStoredImg();

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
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="media planet">
                            <img className="mr-2 round border" alt="Mars" src="./assets/mars.jpg" />
                        </div>
                    </div>
                    <div className="col-md-4 mainpic">
                        <div className="media">
                            <img alt="Selfie" className="mr-3 mainpic border" src="./assets/mainselfie.jpg" width="400" height="300" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card stats border">
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
                <div className="grid" id="imageDiv">
                    {/* {roverImage.map((image) => {
                        return (
                            <img key={image.id} src={image.img_src} alt="Mars" width="200" height="200" />
                        )
                    })} */}
                    {/* <img alt="Mars" width="200" height="200" src={getStoredImg()}/>
              <img alt="Mars" src="./assets/ripples.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/meteorite.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/tracks.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/crystals.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/rock.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/portrait.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/mountsharp.jpg" width="200" height="200" />
              <img alt="Mars" src="./assets/slates.jpg" width="200" height="200" /> */}
                </div>
            </div>
        </div>
    );
};

export default RoverProfile;
