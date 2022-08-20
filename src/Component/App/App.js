import React, { useEffect, useState } from "react";
import "./App.css"
import Cart from "../Cart/Cart";
import NavBar from "../Navbar/NavBar";



export default function App() {

    const [Data, setData] = React.useState(null)
    const [FullCont, setFullCont] = React.useState(0)
    const [CorerectAnswerCont, setCorerectAnswerCont] = React.useState(0)
    useEffect(() => {
        getData();
    }, [])

    function getData() {
        fetch('http://localhost:3000/Data.json')
            .then((props) => {
                return props.json();
            }).then((result) => {
                setData(result.reverse())
                setFullCont(result.length)
            })
    }
    useEffect(() => {
        if (Data !== null && Data.length === 0) {
            if (CorerectAnswerCont === FullCont) {
                alert("YOU WIN")
            } else {
                alert("YOU LOSE")
            }
        }
    }, [Data, CorerectAnswerCont, FullCont])

    function OnClickAswareCart(questionId, isCorrect) {
        setTimeout(() => {
            setData(Data.filter((item) => {
                return item.questionId != questionId
            }))
        }, 2000)
        if (isCorrect) {
            setCorerectAnswerCont(CorerectAnswerCont + 1)
        } else {
            setCorerectAnswerCont(CorerectAnswerCont - 1)
        }
    }

    return (
        <div className="main">
            <NavBar indicate={Data?.length - FullCont} number={FullCont} />
            {Data?.map((item, index) => {
                return <Cart questionId={item.questionId} OnClickAswareCart={OnClickAswareCart} key={index} qustion={item.question} aswers={item.answer} />
            })}
        </div>
    )
}