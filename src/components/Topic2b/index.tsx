import React, { useEffect, useState } from "react";
import './style.css';
type Topic2bProps = {
    handleLogout: (index: number)=>void
}
const Topic2b = (props:Topic2bProps) => {
    const [status, setStatus] = useState(true);
    // useEffect(() =>{
    //     alert('Running App...')
    // },[status])
    return (
        <div className="container">
            
            <div className="item" style={{backgroundColor:status ? "#0000ff" : "#ff0000"}}></div>
            <div className="middle">
                <button className="button" onClick={() => setStatus(!status)}>CHANGE COLOR</button>
            </div>
            <div className="item" style={{backgroundColor:status ? "#ff0000" : "#0000ff"}}></div>
            <div className="">
                <button className="button" onClick={()=> {
                    localStorage.clear();
                    window.location.reload();
                    props.handleLogout(1)
                }}>Log out
                </button>
            </div>
            <div className="">
                <button className="button" onClick={()=> {
                    props.handleLogout(3);
                }}>Topic1</button>
            </div>
        </div>
    );
}

export default Topic2b;