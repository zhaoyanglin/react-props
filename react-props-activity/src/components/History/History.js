import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
            <>
                <h1>History</h1>
                <ul>{this.props.list.map((element, index) => <li key={index}>{element}</li>)}</ul>

            </>
        );
    }
}

export default History;