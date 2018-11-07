import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompareDetails from './compareDetails';
// import Cherry from './images/Cherry.png';
// import Nuts from './images/Nuts.png';
// import Orange from './images/Orancge.png';
// import Strawberry from './images/Strawberry.png';

class productsLists extends Component{
	constructor(props) {
		super (props);

		this.state = {
			buttonName: false,
			productDetail: null,
			productId: false
		}
		this.handleClickChangeName = this.handleClickChangeName.bind(this);
		this.dataToChaild = this.dataToChaild.bind(this);
	}
	
	handleClickChangeName (product, id) {
		this.setState({
			buttonName: !this.state.buttonName
		});
		// compareDetails(product)
	}
	dataToChaild = (product) =>{
		this.setState({
			productDetail: product
		});
	}
	render(){
		const dataList = this.props.products;

	let arr = [];
	let productsItems = [];
	let imgPath;


	for (let key in dataList) {
		if (dataList.hasOwnProperty(key) && (typeof dataList[key] === "object")) {
	  		arr.push(dataList[key]);
	  	}else{
	  		console.log(key + " -> " + dataList[key]);
	  	}
	}
	let productLength = arr[0].products;
	for(let prop in productLength){
		productsItems.push(productLength[prop]);
	}
	let productDetailCopy = this.state.productDetail;
	return(
		<div>
			{productsItems.map((product, index) =>
			<div className="col-sm-6 col-md-3 inlineBlock">
			 <div className="product" key={product.id}>
			 		<div className="image_overlay"> </div>
			 		<div className="view_details" onClick={(event) => 
			 			{this.handleClickChangeName(); this.dataToChaild(product)} }>
			 				{ this.state.buttonName ? "Remove" : "Copare" }
			 			</div>
			 		
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
			{this.state.productDetail !== null &&
				<CompareDetails thisProduct = { this.state.productDetail } />
			}
		</div>
		)
	}

	}

export default productsLists;