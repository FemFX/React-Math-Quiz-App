import React, { Component } from 'react'

export default class Quiz extends Component {
    constructor(){
        super()
        this.state = {
            val   : '',
            num1  : undefined,
            num2  : undefined,
            score : 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick  = this.handleClick.bind(this)
        this.setNumbers   = this.setNumbers.bind(this)
    }
    componentWillMount(){
        this.setNumbers()
    }
    setNumbers(){
        this.setState({
            num1 : Math.floor(Math.random() * 10) + 1,
            num2 : Math.floor(Math.random() * 10) + 1
        })
    }
    handleChange(e){
        this.setState({
            val : e.target.value
        })
    }
    handleClick(){
        this.setState({
            val : ''
        })
        if(parseInt(this.state.val) === this.state.num1 + this.state.num2) {
            this.setState({
                score : this.state.score + 1
            })
        }
        this.setNumbers()
    }
    render() {
        return (
        <div className="quiz">
            <div className="kol">Правильных ответов : <span id="kol_val">{ this.state.score }</span></div>
            <h1 className="text-center">Math Quiz</h1>
            <div className="center">
                <span className="num1">{ this.state.num1 }</span>+
                <span className="num2">{ this.state.num2 }</span>=
                <input 
                    type="number" 
                    value={this.state.val} 
                    className="result" 
                    onChange={this.handleChange}
                />
            </div>
            <button className="btn btn-primary next" onClick={() => this.handleClick()}>Next</button>
        </div>
        )
    }
}
