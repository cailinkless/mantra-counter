import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        usercountinput: "",
        count: "",
        started: false,
        finished: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.count)
        this.setState({
            // count: e.target.querySelector("input").value,
            count: this.state.userCountInput,
            started: true
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            ...this.state,
            finished: "",
            userCountInput: e.target.value
        })
    }

    handleClick = (e) => {
        if (this.state.count - 1 === 0) {
            this.setState({
                ...this.state,
                count: this.state.count - 1,
                started: false,
                finished: true
            })
        } else {
            this.setState({
                ...this.state,
                count: this.state.count - 1
            })
        }

    }

    reset = (e) => {
        this.setState({
            ...this.state,
            finished: false,
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Repeat mantra </label>
                    {this.state.started || this.state.finished ? <label>{this.state.userCountInput}</label> : <input type="text" id="usercount" onChange={this.handleChange}></input>}
                    <label> times. </label>
                    <br/><br/>
                    {this.state.started || this.state.finished ? null : <input type="submit" value="Start Meditation"></input>}
                </form>
                {this.state.started ? <div><h1>{this.state.count}</h1><button onClick={this.handleClick} className="btn-circle btn-xl"><i class="fas fa-om"></i></button></div> : null}
                {this.state.finished ? <div><h1>You completed {this.state.userCountInput} mantra repetitions.</h1></div> : null}
                {this.state.finished ? <div><button onClick={this.reset}>Reset</button></div> : null}
            </div>
        )
    }
}
