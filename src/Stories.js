import React, { Component } from 'react';
import './Home.css';
// import mainImage from '../public/vocab_wizard_main_img.png';
import bullet from '../public/vw_bullet.png';

class Stories extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="pictures-page-content">
          <div className="pictures-header-title">Stories</div>
          <div className="instructions-box">
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                 Using the vocabulary words, have students write a story or poem.  
                 They should be given a length requirement and be told that they need to use a minimum number of vocabulary words,
                 and the words must be used correctly.  
                 You may allow students to work in small groups, or on their own. 
              </span>
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                Then, collect the stories and read them to the class (without mentioning names).  
                Have the class vote on their favorite one and give those students a prize or extra credit.
                You may want to read different class's stories to other classes to avoid students spoiling who wrote what. 
              </span> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Stories;