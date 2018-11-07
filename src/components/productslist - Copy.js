import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cherry from './images/Cherry.png';
// import Nuts from './images/Nuts.png';
// import Orange from './images/Orancge.png';
// import Strawberry from './images/Strawberry.png';

const productsLists = ({ products, compare }) =>{
	const data = products;

	let arr = [];
	let productsItems = [];
	let imgPath;

	for (let key in data) {
		if (data.hasOwnProperty(key) && (typeof data[key] === "object")) {
	  		arr.push(data[key]);
	  	}else{
	  		console.log(key + " -> " + data[key]);
	  	}
	}
	let productLength = arr[0].products;
	for(let prop in productLength){
		productsItems.push(productLength[prop]);
	}
	return(
		<div>
			{productsItems.map((product, index) =>
			<div className="col-sm-6 col-md-3 inlineBlock">
			 <div className="product" key={product.id}>
			 		<div className="image_overlay"> </div>
			 		<div className="view_details"></div>
			 		{this.state.data !== null &&
	          			<ProductsLists products={ jsonData } />
	        		}
					<img src={product.image} title={product.name} />
					<div className="starts">
						<div className="stats-container">
							<span className="product_price">{product.price}</span>
							<span className="product_name">{product.name}</span>
							<p>{product.description}</p>
						</div>
					</div>
				</div>
			</div>
			)}
		</div>
	)
	}

export default productsLists;