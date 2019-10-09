import React, { Component } from 'react';
import './Sentences.css';
import bullet from '../public/vw_bullet.png';
import ApiSentences from './ApiSentences';

class Sentences extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("current state before:", this.state);
    this.setState({value: event.target.value});
    console.log("current state after:", this.state);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>

        {/* {this.state.value && () => {
          <ApiSentences />
        }} */}

          {/* <Form className="word-list-sentence-form">
            <Field 
              type="textarea" 
              component={ApiSentences}
              name="word-list" 
              className="word-list-sentence-box"
            />
            <div>
              <button type="submit" onClick={doStuff} className="submit-button word-list-submit">
                Create Worksheet
              </button>
            </div>
          </Form> */}
        </div>
      </div>
    );
  }
}
export default Sentences;