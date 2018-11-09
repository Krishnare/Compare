import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class compareDetails extends Component{
	render(){
		let currentProd = this.props.thisProduct;
		return(
			<div>
				{currentProd.map((product, index) =>
					<div className="col-sm-6 col-md-3 inlineBlock" key={product.id}>
							<div className="starts">
								<div className="stats-container">
									<span className="product_price">{product.price}</span>
									<span className="product_name">{product.name}</span>
									<p>{product.description}</p>
								</div>
							</div>
					</div>
				)}
			</div>
		)
	}
}

export default compareDetails;