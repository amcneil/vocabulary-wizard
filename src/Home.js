import React, { Component } from 'react';
import './Home.css';
import mainImage from '../public/vocab_wizard_main_img.png';

class Home extends Component {
  render() {
    return (
      <div className="home-page-container flex-container">
        <div className="main-page-content">
          <div className="main-header-title">Welcome to VWiz, The Vocabulary Wizard</div>
          <img src={mainImage} alt="Vocab Wizard Image" className="mainImage" />
        </div>
      </div>
    );
  }
}
export default Home;