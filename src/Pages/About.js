import React, { Component } from 'react';
import '../CSS/About.css'
import { Jumbotron} from 'reactstrap';

class About extends Component {
  render() {
    return (

        <div className="flex">
        <div>
          <Jumbotron fluid className=" even flex-container">

              <div className="About-me">
                <h1 className="display-4" >About me</h1>
                <p className="About-text">Hi my name is Rahul and I go by wayvsage. I'm an artist born in India, and residing in Atlanta now. If you're here, then thanks for your intrigue and curiosity. You can follow my diverse musical trajectory here and peer through a window into my mind</p>
              </div>
              <img className="About-me" src={require('../Images/AboutPageImage.jpg')} atl="" />

          </Jumbotron>
          <Jumbotron fluid className="odd">
              <div >
                <h1 className="display-4">Contact</h1>
                <a  className="About-text" href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=sagemusicbusiness@gmail.com' className="lead">sagemusicbusiness@gmail.com</a>
              </div>
          </Jumbotron>
        </div>

        </div>
    );
  }
}
export default About;
