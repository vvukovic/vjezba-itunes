import React from 'react';
import './App.css';
import Form from './components/FormComponent';
import Results from './components/ResultsComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trackList: [{ trackId: 1, artistName: 'Eminem', trackName: 'My name is' },
      { trackId: 2, artistName: 'Eminem', trackName: 'Slim Shady' }]
    };
  }

  render() {
    return (
      <div className="App">
        <Form onSearch={this.handleAPISearch} value={this.inputText} />
        <Results trackList={this.trackList} />
      </div>
    );
  }

};
