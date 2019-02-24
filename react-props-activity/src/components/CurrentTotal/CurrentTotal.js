import React, { Component } from 'react';

class CurrentToltal extends Component {
    render() {
        return (
            <>
                <div>
                    <p>{this.props.currentNumber}</p>
                    <button onClick={this.props.saveButtonFunction}>Save</button>
                </div>
            </>
        );
    }
}

export default CurrentToltal;