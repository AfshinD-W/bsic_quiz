import React, { Component } from "react";

class Cart extends Component {
    state = {
        isclicked: false
    }
    onClickAnswer(item) {
        if (this.state.isclicked === false) {
            this.setState({ isclicked: true })
            let newObject = {
                ...item,
                slected: true
            }
            this.props.OnClickAswareCart(newObject)
        }
    }
    render() {
        return (
            <div className="question">
                <h2>{this.props.qustion}</h2>
                <div className="answer-box">
                    {this.props.aswers.map((item, index) => {
                        return <span style={{backgroundColor:item.slected?"rgba(68,189,184,1)":"unset"}} key={index} onClick={this.onClickAnswer.bind(this, item)} className="answer">{item.response}</span>
                    })}
                </div>
            </div>
        )
    }
}
export default Cart