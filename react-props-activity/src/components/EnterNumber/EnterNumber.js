import React, { Component } from 'react';
import CurrentToltal from '../CurrentTotal/CurrentTotal';
import History from '../History/History';

class EnterNumber extends Component {
    state = {
        inputNumber: '',
        actualNumber: 0,
        history: [],
    }

    handleChangeForInput = (event) => {
        this.setState({
            inputNumber: event.target.value
        })
    }

    handleChangeForButton = (key) => {
        if (key === 'upNumber') {
            this.setState({
                actualNumber: Number(this.state.inputNumber) + Number(this.state.actualNumber),
                inputNumber:''
            })
        } else if (key === 'downNumber') {
            this.setState({
                actualNumber: Number(this.state.actualNumber) - Number(this.state.inputNumber),
                inputNumber:''
            })
        }
    }

    saveNumberToHistory = () => {
        this.setState({
            history: [...this.state.history, this.state.actualNumber]
        })
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.handleChangeForButton('upNumber')}>UP</button>
                    <input
                        placeholder='Enter Number'
                        type='number'
                        onChange={this.handleChangeForInput}
                        value={this.state.inputNumber}
                    />
                    <button onClick={() => this.handleChangeForButton('downNumber')}>DOWN</button>
                </div>

                <CurrentToltal currentNumber={this.state.actualNumber} saveButtonFunction={this.saveNumberToHistory}/>

                <History list={this.state.history}/>

            </>
        );
    }
}

export default EnterNumber;