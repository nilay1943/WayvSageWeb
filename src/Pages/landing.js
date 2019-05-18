import React, { Component } from 'react';
import '../CSS/App.css'
import  {Button, ButtonGroup }  from 'reactstrap';

class LandingPage extends Component {
  render() {
    return (

        <div className="hero hero-padded">
          <h1 id='title'> Wayv $age Hub </h1>

            <ButtonGroup className="gallery">
              <div className="column">
              <Button id="soundcloud" onClick={() => window.open('https://soundcloud.com/wayvsage')}></Button>
              </div>
              <div className="column">
              <Button id="spotify" onClick={() => window.open('https://open.spotify.com/artist/1FBibpKxMFn0pxeJgueDJi')}></Button>
              </div>
            </ButtonGroup>
            <ButtonGroup className="gallery">
              <div className="column">
              <Button id="instagram" onClick={() => window.open('https://www.instagram.com/wayvsageshotit/')}></Button>
              </div>
              <div className="column">
              <Button id="apple" onClick={() => window.open('https://itunes.apple.com/us/artist/%24age/1444226279')}></Button>
              </div>

            </ButtonGroup>

        </div>
    );
  }
}
export default LandingPage;
