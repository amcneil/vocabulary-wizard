import React, { Component } from 'react';
import './Home.css';
import mainImage from '../public/vocab_wizard_main_img.png';

class ComingSoon extends Component {
  render() {
    return (
      <div className="home-page-container flex-container">
        <div className="main-page-content">
          <div className="main-header-title">Coming Soon!</div>
          <img src={mainImage} alt="Vocab Wizard Image" className="mainImage" />
        </div>
      </div>
    );
  }
}
export default ComingSoon;