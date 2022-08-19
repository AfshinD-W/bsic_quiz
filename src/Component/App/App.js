import React, { useEffect, useState } from "react";
import "./App.css"
import Cart from "../Cart/Cart";
import NavBar from "../Navbar/NavBar";



export default function App() {

    const [Data, setData] = React.useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        fetch('http://localhost:3000/Data.json')
            .then((props) => {
                return props.json();
            }).then((result) => {
                setData(result.reverse())
            })
    }

    function OnClickAswareCart(questionId) {
        setTimeout(()=>{
            setData(Data.filter((item)=>{
                return item.questionId != questionId
            }))
        },2000)
        //console.log(newArray);
    }

    return (
        <div className="main">
            <NavBar indicate={0} number={3} />
            {Data.map((item, index) => {
                return <Cart questionId={item.questionId} OnClickAswareCart={OnClickAswareCart} key={index} qustion={item.question} aswers={item.answer} />
            })}
        </div>
    )
}