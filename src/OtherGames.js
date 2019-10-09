import React, { Component } from 'react';
import './Home.css';
// import mainImage from '../public/vocab_wizard_main_img.png';
import bullet from '../public/vw_bullet.png';

class OtherGames extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="pictures-page-content">
          <div className="pictures-header-title">Other Games</div>
          <div className="instructions-box">
            <div className="secondary-title">Around the World</div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                For this activity, give each student a plain piece of paper and one of the vocabular words.
                They will write the word big and clear on one side of the page. 
                The definition will be written in pencil or something that won't bleed through on the other side of the page. 
              </span>
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                Then, in the classroom or somewhere with a lot of room, split the class into two sections. 
                It is best to make sure that the words are equally represented in each section as much as possible. 
                One section will form a circle with students facing outwards.  
                Then, the other students will each face the students in the circle, one student for each student.
              </span> 
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                The student on the inside will hold up their word and the student on the inside will try and come up with the definition.
                Give each students about 30 seconds, then yell something like, "switch", and the outside students will rotate to the next student in the circle.
                Keep doing this until everyone has made their way around the circle, then those in the inside will switch with those on the outside and go aroung again. 
              </span> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OtherGames;