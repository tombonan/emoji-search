import React, { Component } from 'react';
import { FormGroup, ControlLabel, Col, FormControl } from 'react-bootstrap';
import Results from './Results';
import emojiFilter from './emojiFilter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            input: '',
            emojiFilter: emojiFilter('', 20)
        };
    }

    handleChange(e) {
        this.setState({
            input: e.target.value,
            emojiFilter: emojiFilter(e.target.value, 20)
        });
    }

    render() {

    return (
        <div className="App">
          <form>
            <FormGroup row>
              <Col xs={10} md={3} style={{ margin: 'auto', marginTop: '100px' }}>
                <ControlLabel sm={2}>Search Emojis</ControlLabel>
                <FormControl autocomplete="off" type="search" name="search" id="Search" onChange={this.handleChange.bind(this)}/>
                        {(this.state.input !== "") ? <Results data = {this.state.emojiFilter}/> : null }
              </Col>
            </FormGroup>
          </form>


      </div>
    );
  }
}

export default App;
