import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class compareDetails extends Component{
	constructor(props){
		super(props);
  	}

	render(){
		let currentProd = this.props.thisProduct;
		return(
			<div>
				<table className="table">
					<tr>
						<th>{ currentProd.name }</th>
					</tr>
					<tr>
						<td>Price</td>
						<td>{currentProd.price}</td>
					</tr>
				</table>
			</div>
		)
	}
	
}

export default compareDetails;