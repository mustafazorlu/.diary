import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive,onChangeName }) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing] = useState(false);
    // const []

    const handleEditClick = () => {
        setEditing(!isEditing);
        
        if(isEditing){
            onChangeName(symbol, playerName)
        }
    };

    const handleChange = (value) => {
        setPlayerName(value);
    };

    // let playerName = <span className="player-name">{name}</span>;

    // if (isEditing) {
    //     playerName = <input type="text" required />;
    // }
    console.log(playerName);
    return (
        <li className={isActive ? 'active': undefined}>
            <span className="player">
                <div className="player_name">
                    {isEditing ? (
                        <input
                            type="text"
                            required
                            className="edit_input"
                            value={playerName}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                    ) : (
                        <span className="player_span">{playerName}</span>
                    )}
                </div>
                <span className="player_symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick} className="edit_btn">
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
};

export default Player;
