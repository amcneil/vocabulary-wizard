import React, { Component } from 'react';
import './Home.css';
// import mainImage from '../public/vocab_wizard_main_img.png';
import bullet from '../public/vw_bullet.png';
import template1 from '../public/flash_cards.jpg';
import template2 from '../public/flash_cards2.jpg';

class Cards extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="cards-page-content">
          <div className="card-header-title">Cards</div>
          <div className="instructions-box">
            <div className="secondary-title">Flash Cards</div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                For this game, download and print out the card template below.  
                Students will be in groups of 2-4, so print enough so that each group has one set of cards (one word per card).  
              </span>
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                Students will cut out the cards and put the word on one side, and a definition on the other.  
                You can also do a picture instead of the word, or an example instead of the definition. 
                Be sure to use a pencil or something that won't bleed through the paper and reveal the answer. 
              </span> 
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                Then, students will shuffle the cards and one will say the word (or the defintion) and the others will try to guess.
                Whomever guesses the word/definition correctly gets the card, and the one with the most cards at the end wins.  
                Then, switch who is reading the cards and play again until everyone in the group has a turn.
              </span> 
            </div>
            <div className="secondary-title">Memory</div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                For this game, download and print out the card template below.  
                Students will be in groups of 2-4, so print enough so that each group has one set of cards.
                Unlike the flash card game, you'll want one card for each word and one for each definition.  
              </span>
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                Students will cut out the cards and put the word on one card and the defintion on the other. 
                The other side will be blank.  
                You can also do a picture instead of the word, or an example instead of the definition. 
                Be sure to use a pencil or something that won't bleed through the paper and reveal the answer. 
              </span> 
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                Then, students will shuffle the cards and place them blank side up on a desk or table.
                They will take turns revealing a card and trying to match it to the definition. 
                If they match them correctly, they get to keep that card and go again.
                Whomever has the most cards at the end, wins. 
              </span> 
            </div>
          </div>
        </div>
        <div className="card-section">
          <div className="secondary-title">Card Templates:</div>
          <a href={template1} download>
            <img src={template1} alt="card template" className="card-template-icon"/>
          </a>
          <a href={template2} download>
            <img src={template2} alt="card template" className="card-template-icon"/>
          </a>
        </div>
      </div>
    );
  }
}
export default Cards;

