import React, { Component } from 'react';
import './Home.css';
// import mainImage from '../public/vocab_wizard_main_img.png';
import bullet from '../public/vw_bullet.png';
import template1 from '../public/picture_template.jpg';
import template2 from '../public/picture_template2.jpg';

class Pictures extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="pictures-page-content">
          <div className="pictures-header-title">Pictures</div>
          <div className="instructions-box">
            <div className="secondary-title">Drawing</div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                For this activity, give each student a plain piece of paper, or print out the template below.  
                Students can work by themselves, or with a partner, depending on your preference. 
              </span>
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                Students will draw a picture for each word that helps them remember the definition of the word.
                It can be anything appropriate that they like, as long as it helps them remember what the word means.
                (It might not make sense to you, but that's ok.) 
              </span> 
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                Then, they will label each picture with the word and write why they drew what they drew for that word. 
                Feel free to hang up the pictures or have students share their work with the rest of the class. 
              </span> 
            </div>
            <div className="secondary-title">Pictionary</div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                The teacher will fill a container with slips of paper containing the vocabulary words.
                Students will get into two teams and the teacher will set a timer and one student will go to the whiteboard.
              </span>
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                The student at the board will draw the word and their team (or a one person from their team) will try and guess the word.
                Once the word is guessed, they will draw another word and continue until time runs out.
                Whichever team has the most points at the end of a set number of rounds, wins. 
              </span>
            </div>
          </div>
        </div>
        <div className="picture-section">
          <div className="secondary-title">Picture Templates:</div>
          <a href={template1} download>
            <img src={template1} alt="picture template" className="picture-template-icon"/>
          </a>
          <a href={template2} download>
            <img src={template2} alt="picture template" className="picture-template-icon"/>
          </a>
        </div>
      </div>
    );
  }
}
export default Pictures;