import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count: 0,
        started: false,
        finished: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.count)
        this.setState({
            ...this.state,
            started: true
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            ...this.state,
            count: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Repeat mantra </label>
                    <input type="text" id="usercount" onChange={this.handleChange}></input>
                    <label> times. </label>
                    <br/><br/>
                    <input type="submit" value="Start Meditation"></input>
                </form>
                {this.state.started ? <h1>{this.state.count}</h1> : null}
            </div>
        )
    }
}
