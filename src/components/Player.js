import React, { useState } from 'react';

function Player({ player, voted, vote }) {

    //const [show, setShow] = useState(false);

    return(
        <p>{ player.name } - { voted === false 
            ? <button onClick={ () => vote(player.id) }>Vote</button>
            : voted === '...' ? voted : 'Voted'
            }
        </p>
    );
}

export default Player;
