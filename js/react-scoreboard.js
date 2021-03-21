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
			<button className="remove-player" onClick={ () => props.removePlayer(props.id) }> x </button>
			<span className="player-name">
				{ props.name }
			</span>
			
			<Counter score={ props.score } />
		</div>
	);
}

class Counter extends React.Component {
	state = {
		score: 0
	};

	incrementScore = () => {
		this.setState( prevState => ({
			score: this.state.score + 1
		}));
	}

	decrementScore = () => {
		this.setState( prevState => ({
			score: this.state.score - 1
		}));
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

class App extends React.Component{
	state = {
		players: [
			{
				id: 1,
				name: "JC"
			},
			{
				id: 2,
				name: "Sel"
			},
			{
				id: 3,
				name: "Skye"
			},
			{
				id: 4,
				name: "Mowgli"
			}
		]
	}

	handleRemovePlayer = (id) => {
		this.setState( prevState => ({
			players: prevState.players.filter( p => p.id !== id)
		}));
	}

	render() {
		return (
			<div className="scoreboard">
				<Header title="Scoreboard" totalPlayers={ this.state.players.length } />

				{ this.state.players.map( player => 
					<Player 
						id={ player.id }
						name={ player.name }
						key={ player.id.toString() }
						removePlayer={ this.handleRemovePlayer } />
				)}
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('main_content')
);