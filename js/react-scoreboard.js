const Header = () => {	
	return (
		<div className="header">
			<h1>Scoreboard</h1>
			<span className="stats">Players: 1</span>
		</div>
	);
}

const Player = () => {
	return (
		<div className="player">
			<span className="player-name">JC</span>
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">35</span>
				<button className="counter-action increment"> + </button>
			</div>
		</div>
	);
}

const App = () => {
	return (
		<div className="scoreboard">
			<Header />

			<Player />
		</div>
	);
}


ReactDOM.render(
	<App />,
	document.getElementById('main_content')
);