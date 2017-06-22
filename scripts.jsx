// Our first Component
// ** Everything that is to be returned must be wrapped in a single tag
// Above the 'return' is dom javascript
// Inside the 'return' is jsx
function Application(){
	var name = 'Hayes';
	return(
		<div>
			<div>
				<h1>Helloow Woorld?</h1>
				<Message name="Hayes" gender="Anon"/>
				<Message name="Nick"/>
				<Message name="Carla"/>
				<Message name="Shane"/>
				<Message name="Michael"/>
				<h2>From {name}</h2>
			</div>
			<div>
				<h2>This contains 33.64% HAM</h2>
			</div>
		</div>
	)
}

function Message(props){
	return(
			<h1>Hello, {props.name}. Gender: {props.gender}</h1>
	)
}

// ReactDOM is avilable because we included reactDOM.js
// The .render function needs react (react.js) and takes 2 arguments
// 1. the component to render
// 2. where to render it
// When reactDOM.render runs it will OWN that element

ReactDOM.render(
	// <h1>Hello World</h1>,
	<Application />,
	document.getElementById('container')
)

// PROPS = properties
// when we call the component into existence
// we can send it props 