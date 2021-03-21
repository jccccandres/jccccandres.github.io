const players = [
	{
		id: 1,
		name: "JC",
		score: 0
	},
	{
		id: 2,
		name: "Sel",
		score: 0
	},
	{
		id: 3,
		name: "Skye",
		score: 0
	},
	{
		id: 4,
		name: "Mowgli",
		score: 0
	}
]

const Header = (props) => {	
	return (
		<div className="header">
			<h1>{ props.title }</h1>
			<span className="stats">Players: { props.totalPlayers }</span>
		</div>
	);
}

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">{ props.name }</span>
			
			<Counter score={ props.score } />
		</div>
	);
}

class Counter extends React.Component {
	state = {
		score: 0
	};

	incrementScore = () => {
		this.setState({
			score: this.state.score + 1
		});
	}

	decrementScore = () => {
		this.setState({
			score: this.state.score - 1
		});
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
				<span className="counter-score">{ this.state.score }</span>
				<button className="counter-action increment" onClick={ this.incrementScore }> + </button>
			</div>
		);
	}
}

const App = (props) => {
	return (
		<div className="scoreboard">
			<Header title="Scoreboard" totalPlayers={ props.initialPlayers.length } />

			{ props.initialPlayers.map(
				player => <Player 
					name={ player.name } 
					score={ player.score }
					key={ player.id.toString() } />
			)}
		</div>
	);
}


ReactDOM.render(
	<App initialPlayers={ players }/>,
	document.getElementById('main_content')
);