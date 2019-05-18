import React, { Component } from 'react';
import '../CSS/App.css'
import '../CSS/About.css'
import { Jumbotron, Container } from 'reactstrap';

class About extends Component {
  render() {
    return (

        <div className="hero">
        <div>
          <Jumbotron fluid className="even">
            <Container fluid>
              <div className="text">
                <h1 className="display-4" ALIGN='left'>About me</h1>
                <p className="lead" ALIGN='left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <img src={require('../Images/AboutPageImage.jpg')} atl=" " />
            </Container>
          </Jumbotron>
          <Jumbotron fluid className="odd">
            <Container fluid>
              <div className="text">
                <h1 className="display-4" ALIGN='left'>Contact</h1>
                <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=sagemusicbusiness@gmail.com' className="lead" ALIGN='left'>sagemusicbusiness@gmail.com</a>
              </div>
            </Container>
          </Jumbotron>
        </div>

        </div>
    );
  }
}
export default About;
