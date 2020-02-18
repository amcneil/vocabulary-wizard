import React, { Component } from 'react';
import './Sentences.css';
import bullet from '../public/vw_bullet.png';
import ApiSentences from './ApiSentences';

class Sentences extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      wordListVisible: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("current state before:", this.state);
    this.setState({
      inputValue: event.target.value,
      wordListVisible: false
    });
    console.log("current state after:", this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({wordListVisible: true})
    
  }

  render() {
    return (
      <div className="sentences-page-container flex-container">
        <div className="main-page-content">
          <div className="main-title">Sentences</div>
          <div className="instructions-box">
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                In the box below, type or copy in your list of words.  Make sure each is separated by a space.  
              </span>
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                Once finished, click “Create Worksheet” and it will return a sentence for each word with the word removed. 
                It will also return a word bank. 
              </span> 
            </div>
            <div className="sentences-instruction-bullet">
              <img src={bullet} alt="bulletpoint" className="bulletpoint" />
              <span className="bullet-text">
                You can either copy the sentences into a word document and print/edit it, or download a pdf to print.
              </span> 
            </div>
          </div>
          <div className="Word-list-title">My Word List:</div>

          <form onSubmit={this.handleSubmit}>
            <label>
              Input Vocabulary Word:
              <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            </label>
            <input type="submit" className="submit-button word-list-submit" value="Submit" />
          </form>

          {this.state.wordListVisible && <ApiSentences vocabularyWord={this.state.inputValue} />}

        </div>
      </div>
    );
  }
}
export default Sentences;