import React, { Component } from 'react';
import { FormGroup, ControlLabel, Col, FormControl } from 'react-bootstrap';

class Search extends Component {
    render() {
        return (
            <form>
            <FormGroup row>
              <Col xs={10} md={8}>
                <ControlLabel sm={2}>Search Emojis</ControlLabel>
                <FormControl type="search" name="search" id="Search" />
              </Col>
            </FormGroup>
          </form>
        );
    }
}

export default Search;
