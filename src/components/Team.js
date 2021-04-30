import React, { useState } from 'react';

import Player from './Player';

function Team({ team, voted, setVoted }) {

    const [show, setShow] = useState(false);

    return(
        <div className="Team">
            <p>{ team.name }</p>
            <p>{ team.stadium }</p>
            <button onClick={ () => setShow(!show) }>
                { show ? 'Show less' : 'Show more' }
            </button>
            { show && team.franchisePlayers.map((player, i) => 
            <Player key={ i } player={ player } voted={ voted } setVoted={ setVoted } />) }
        </div>
    );
}

export default Team;