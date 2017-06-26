
var products = [
{
	category: 'Sporting Goods',
	type: [
		{
			name: 'Football',
			price: '49.99'
		},
		{
			name: 'Baseball',
			price: '9.99'
		},
		{
			name: 'Basketball',
			price: '29.99'
		}
	]
},
{
	category: 'Electronics',
	type: [
		{
			name: 'iPod Touch',
			price: '99.99'
		},
		{
			name: 'iPhone 5',
			price: '399.99'
		},
		{
			name: 'Nexus 7',
			price: '199.99'
		}
	]
}
]

function Application(props){
	return(
		<div className='container'>
			<div className='col-sm-3 table-wrapper'>
				<SearchBar />
				<Results products={props.products}/>
			</div>	
		</div>
	)
}

function Results(props){
	console.log(props.products)
	return(
		<div className='row'>
			<div className='col-sm-12 results-headers'>
				<span>Name:</span>
				<span>Price:</span>
			</div>
			{props.products.map((category,index)=>{
				return <Category key={index} category={category.category} type={category.type} />
			})}
		</div>
	)
}

function Category(props){
	console.log(props)
	return(
		<div className='col-sm-12'>
			<div className='row'>
				<h5>{props.category}</h5>
			</div>
			<div className='col-sm-12'>
				{props.type.map((product,index)=>{
					return <Product key={index} name={product.name} price={product.price} />
				})}
			</div>
		</div>	
	)
}

function Product(props){
	return(
		<div className='row'>
			<div className='col-sm-6'>
				{props.name}
			</div>
			<div className='col-sm-6'>
				$ {props.price}
			</div>
		</div>	
	)
}

function SearchBar(props){
	return(
		<div className='row search-bar'>
			<form>
				<div className='form-group col-sm-12'>
					<input className='search-input' type='text' placeholder='Search...'/>
				</div>
				<div className='form-group col-sm-12'>
					<input type='checkbox'/><span>Only show products in stock</span>
				</div>
			</form>	
		</div>
	)
}

ReactDOM.render(
	<Application products={products} />,
	document.getElementById('root')
)