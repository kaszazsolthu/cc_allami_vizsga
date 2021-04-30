import React, { useEffect, useState } from 'react';

import Team from './components/Team';


import './App.css'

function App() {

    const [teams, setTeams] = useState(false);
    const [voted, setVoted] = useState(false);

	useEffect(() => {
		fetch('/api/teams')
			.then(response => response.json())
			.then(data => setTeams(data));
	}, []);

    return (
        <div className="App">
            <h1>NBA teams - all star voting</h1>
            { teams && teams.map((team, i) =>
                <Team key={ i } team={ team } voted={ voted } setVoted={ setVoted } />) }
        </div>
    )
}

export default App;
