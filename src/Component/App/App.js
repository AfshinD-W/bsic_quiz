import React, { useState } from "react";
import "./App.css"
import Cart from "../Cart/Cart";
import NavBar from "../Navbar/NavBar";



export default function App() {
    const [Answer, setAnswer] = React.useState([{ id: "1", response: "1" }, { response: "2", id: "2" }, { response: "3", id: "3" }, { response: "4", id: "4" }]);
    const [question, Setquestion] = useState([{}, {}])
    function OnClickAswareCart(newitem) {

        let newArray = Answer.map((i) => {
            if (newitem.id === i.id) {
                return newitem
            }
            else {
                return i
            }
        })
        console.log(newArray);
        setAnswer(newArray)
    }

    return (
        <div className="main">
            <NavBar indicate={0} number={3} />
            {question.map(() => {
                return <Cart OnClickAswareCart={OnClickAswareCart} qustion={"solal"} aswers={Answer} />
            })}
        </div>
    )
}