import React from "react";

export default function NavBar(props) {

    function Loop() {
        let arr = [];
        for (let i = 0; i < props.number; i++) {
            arr.push(<span key={i}></span>)
        }
        return arr
    }
    return (
        <>
            <div className="navbar">
                <div className="porogres_bar">
                    <div style={{ transform: `translateX(${(((100 / props.number) * props.indicate) * -1) - 100}%)` }} className="porogres_bar-indicatot"></div>
                    {Loop()}
                </div>
            </div>
        </>
    )
}