import React, { Component } from 'react';
import { FormGroup, ControlLabel, Col, FormControl } from 'react-bootstrap';
import Search from './Search';
import Results from './Results';
import emojiFilter from './emojiFilter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            emojiFilter: emojiFilter('happy', 20)
        };
    }

  render() {
    return (
        <div className="App">
          <Search />
          <Results data = {this.state.emojiFilter}/>
      </div>
    );
  }
}

export default App;
