function Application(props){
	return(
		<div className	="container">
			<Header title={props.title} />
			{props.teams.map((team,index)=>{
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />
			})}
		</div>
	)
}

function Header(props){
	return(
		<div className='header text-center'>
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className="row">
			<div className="col-sm-12 text-center team">
				<div className="team-name col-sm-12">{props.city} {props.name}</div>
				<Counter gamesBack={props.gamesBack} />
			</div>
		</div>
	)
}

// var with the name of the component
// the only required property is render()
var Counter = React.createClass({

	// A set react property (like render), getInitialState()
	getInitialState: function() {
		// this function sets the initail state value of a variable
		// It returns a single Object
		var stateObject = {
			gamesBack: 0
		}
		return stateObject;

		// or this...
		return {
			gamesBack: 0
		}
	},

	addGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack + 1
		});
		// NEVER CHANGE STATE YOURSELF!!
		// Let React change it for you so it can mange the state for you
		// BAD!!!
		// that.state.gamesBack++;
	},

	loseGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack - 1
		});
	},

	render: function(){
		return(
			<div className='counter'>
				<button onClick={this.addGame} className='btn btn-success'>Bacon</button>
				<div className='team-score'>{this.state.gamesBack}</div>
				<button onClick={this.loseGame} className='btn btn-danger'>Not Bacon</button>
			</div>
		)
	}
});

// State
// Props are immutable, they do noot change
// State is a piece data, that DOES change.
// State has:
// 1. An initial value
// 2. (Infinite number of) changed values
// In the case of the NL east, all gamesBack start at 0
// Some kinf of mutation occurs(namely, someone wins or loses)

// In ES5 to use state, React provides a component for us to use
// It takes an object as a param.

// ANYTIME STATE CHANGES... THE COMPONENT WILL RE-RENDER

var teams = [
	{
		name: 'Braves',
		gamesBack: 0,
		city: 'Atlanta'
	},
	{
		name: 'Nationals',
		gamesBack: 0,
		city: 'Washington'
	},
	{
		name: 'Marlins',
		gamesBack: 0,
		city: 'Miami'
	},
	{
		name: 'Mets',
		gamesBack: 0,
		city: 'New York'
	},
	{
		name: 'Planet Express',
		gamesBack: 0,
		city: 'New New York'
	},
]
// Add a prop to send the title to the Application Component
ReactDOM.render(
	<Application title='NL East Standings' teams={teams} />,
	document.getElementById('root')
)