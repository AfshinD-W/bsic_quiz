import React, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";

class Cart extends Component {
    state = {
        isclicked: false,
        aswers: []
    }

    componentDidMount() {
        this.setState({ aswers: this.props.aswers })
    }

    onClickAnswer(item) {
        if (this.state.isclicked === false) {
            this.setState({ isclicked: true });


            let newArray = this.state.aswers.map((i) => {
                if (item.id == i.id) {
                    return { ...item, slected: true }
                }
                return i
            })

            this.setState({ aswers: newArray })

            this.props.OnClickAswareCart(this.props.questionId)
        }
    }

    render() {
        return (
            <div className="question">
                <h2>{this.props.qustion}</h2>
                <div className="answer-box">
                    {this.state.aswers.map((item, index) => {
                        return <span style={{ backgroundColor: item.slected ? item.isCorrect ? "rgba(68,189,184,1)" : "red" : "unset" }} key={index} onClick={this.onClickAnswer.bind(this, item)} className="answer">{item.response}</span>
                    })}
                </div>
            </div>
        )
    }
}
export default Cart