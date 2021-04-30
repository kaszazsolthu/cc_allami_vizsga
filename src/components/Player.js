import React, { useState } from 'react';

function Player({ player, voted, setVoted }) {

    //const [show, setShow] = useState(false);

    return(
        <p>{player.name} - <button onClick={ () => vote() }>
            { !voted ? 'Vote'
                : voted === '...' ? voted : 'Voted'
            }    
            </button>
        </p>
    );
}

export default Player;