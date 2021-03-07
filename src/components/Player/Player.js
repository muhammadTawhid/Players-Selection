import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

const Player = (props) => {
    const {Img,Name,Born,CurrentAge,PlayingRole,BattingStyle,Cost} = props.player;
    const nameStyle ={fontWeight:'bold',}
    const divStyle = {border:'1px solid grey', margin:'10px',padding:'10px'}
    const handleClick = props.datapass;

    const [isClicked , setIsClicked] = useState(false);

    return (
        <div className='' style={divStyle}>
            <img src={Img} alt=""/>
            <p>Player Name:<span style={nameStyle}>{Name}</span></p>
            <p>Born: {Born}</p>
            <p>Current age: {CurrentAge}</p>
            <p>Playing role: {PlayingRole}</p>
            <p>Batting style: {BattingStyle}</p>
            <p>Cost: {Cost}</p>
            <button  className="btn-success"  onClick={() =>{
                handleClick(props.player) 
                setIsClicked(true)
            }}><FontAwesomeIcon icon={faPlusSquare} />
               {isClicked ? "Already Added" : "Add Player"}
                </button>
        </div>
    );
}

export default Player;
        