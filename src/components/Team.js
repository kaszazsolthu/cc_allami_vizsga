
function Team({ team }) {
    return(
        <div className="Team">
            <p>{ team.name }</p>
            <p>{ team.stadium }</p>
            <button>{ 'Show more' }</button>
        </div>
    );
}

export default Team;