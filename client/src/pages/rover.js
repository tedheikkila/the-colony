import React from 'react';

// static rover/home page 
// displays current Rover's profile pic and stats
// 3x3 image matrix
function RoverProfile() {

    // const [roverImage, setRoverImage] = useState([]);

    // determined that NASA' API call images weren't distinct/different enough
    // useEffect(() => {

    // searchRoverImg();

    // async function searchRoverImg() {
    //     const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=v1vqd0PdgPpMhpKjaxObGA6dQtpp5g5KweeYDx7O')
    //     const data = await response.json();

    //     setRoverImage(data);
    //     const arrayCopy = roverImage.slice(0,9);
    //     setRoverImage(arrayCopy);
    //     for (var i = 0; i < 8; i++) {

    //         const imageData = data.photos[i].img_src;
    //         console.log(imageData);
    //         let storedImage = JSON.parse(localStorage.getItem("image"));
    //         let restoredImage = localStorage.setItem("image", JSON.stringify(imageData));
    //         setRoverImage()            }

    // }
    // }, []);

    // function getStoredImg() {
    //     let storedImage = JSON.parse(localStorage.getItem("image"));
    //     if (image === null) {
    //         var image = ""
    //         return image
    //     } else
    //         return `${storedImage} `
    // }
    // getStoredImg();

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
                            <img className="mr-2 round border" alt="Mars" src="./assets/mars.jpg"/>
                        </div>
                    </div>
                    <div className="col-md-4" id="mars-stats">
                        <div className="card stats border">
                            <h5 className="card-header">Mars Rover Perserverance</h5>
                            <div className="card-body">
                                <p className="card-text">Mission: exploring Jezero crater</p>
                                <p className="card-text">First landing: Feb 18th, 2021</p>
                                <p className="card-text">Weight on Earth: 2,260 lbs</p>
                                <p className="card-text">Features:
                                    <li>Generates heat from plutonium</li>
                                    <li>Assesses minerals on surface</li>
                                    <li>Advanced camera system</li>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mainpic">
                        <div className="media">
                            <img alt="Selfie" className="mr-3 mainpic border" src="./assets/mainselfie.jpg" width="300" height="300" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid justify-content-center" id="imageDiv">
                    <img alt="Mars" src="./assets/ripples.jpg" width="200" height="200" />
                    <img alt="Mars" src="./assets/meteorite.jpg" width="200" height="200" />
                    <img alt="Mars" src="./assets/tracks.jpg" width="200" height="200" />
                    <img alt="Mars" src="./assets/crystals.jpg" width="200" height="200" />
                    <img alt="Mars" width="200" height="200" src="./assets/images/mars.png" />
                    <img alt="Mars" src="./assets/rock.jpg" width="200" height="200" />
                    <img alt="Mars" src="./assets/portrait.jpg" width="200" height="200" />
                    <img alt="Mars" src="./assets/mountsharp.jpg" width="200" height="200" />
                    <img alt="Mars" src="./assets/slates.jpg" width="200" height="200" />
                </div>
            </div>
        </div>
    );
};

export default RoverProfile;
