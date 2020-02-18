import React, { Component } from 'react';

class ApiSentences extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    console.log("props:", this.props);
    fetch("https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=" + this.props.vocabularyWord, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "8065d5d017mshe3535e9d9e49163p177dc8jsnac5f8e386c24"
      }
    })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
    .then(wordInfo => {
      console.log("wordInfo:", wordInfo);
      return wordInfo.example;
    })
    .then(examples => {
      console.log(`received data:`, examples);
      this.setState({
        isLoaded: true,
        items: examples,
      })
    });
  }

  render() {
    return (
      <div className="sentences-examples">
        <ul>
          {this.state.items.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ApiSentences;