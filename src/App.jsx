import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "December 25, 2019",
            newDeadLine: ""
        }
    }

    changeDeadLine() {
        if (this.state.newDeadLine > this.state.deadline) {
            this.setState({ deadline: this.state.newDeadLine });
        } else {
            this.setState({ deadline: "Enter a valid date past today" })
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} />
                <Form inline>
                    <FormControl
                        classname="Deadline-input"
                        placeholder="new date"
                        onChange={event => this.setState({ newDeadLine: event.target.value })}
                    />
                    <Button onClick={() => this.changeDeadLine()}>Submit</Button>
                </Form>

            </div>
        )
    }
}

export default App;