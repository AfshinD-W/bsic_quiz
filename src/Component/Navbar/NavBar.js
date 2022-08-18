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
                    <div style={{right:`${100 -props.indicate}%`}} className="porogres_bar-indicatot"></div>
                    {Loop()}
                </div>
            </div>
        </>
    )
}