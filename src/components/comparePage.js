import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import ProductsLists from './productslist';
// import data from './products.json'

class Compare extends Component{
	constructor(props) {
		super (props);
		this.state = {
			data: null
		}
	}

	componentDidMount() {
		axios.get('https://api.myjson.com/bins/uyl3y')
			.then((response) => {
				console.log(response);
				this.setState({data: response})
		})
		.catch(function (error) {
			console.log(error);
		});
	}


	render(){
		//const jsonData = this.state.data;
		const jsonData = this.state.data;
		const compareVal = this.state.compare;
		return(
			<div>
				{this.state.data !== null &&
	          		<ProductsLists products={ jsonData } />
	        	}
			</div>
		)
	}
}

export default Compare;
