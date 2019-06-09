import React, { Component } from 'react';
import '../CSS/landing.css'
import  {Button, ButtonGroup }  from 'reactstrap';

class LandingPage extends Component {
  render() {
    return (

        <div className="padded-grid">
          <h1 id='title'> Wayv $age Hub </h1>
          <div className="groupbtn">
          
            <Button id="soundcloud" onClick={() => window.open('https://soundcloud.com/wayvsage')}></Button>
            <Button id="spotify" onClick={() => window.open('https://open.spotify.com/artist/1FBibpKxMFn0pxeJgueDJi')}></Button>
            <Button id="instagram" onClick={() => window.open('https://www.instagram.com/wayvsage/')}></Button>
            <Button id="apple" onClick={() => window.open('https://itunes.apple.com/us/artist/%24age/1444226279')}></Button>
          </div>
        </div>
    );
  }
}
export default LandingPage;
