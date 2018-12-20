import React, { Component } from 'react';

class Results extends Component {
    createItem(emoji) {
        return <li key={emoji.title}>{emoji.symbol}</li>;
    }
    render() {
        const data = this.props.data;
        const listEmojis = data.map(this.createItem);
        return (
            <ul>{listEmojis}</ul>
        );
    }
}

export default Results;
