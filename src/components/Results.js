import React, { Component } from 'react';

class Results extends Component {
    createItem(emoji) {
        return <li style={{ listStyleType: "none" }} key={emoji.title}>{emoji.symbol}    {emoji.title}</li>;
    }
    render() {
        const data = this.props.data;
        const listEmojis = data.map(this.createItem);
        return (
            <ul style={{ marginLeft: '-30px', marginTop: '10px' }}>{listEmojis}</ul>
        );
    }
}

export default Results;
