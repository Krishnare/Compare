import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompareDetails from './compareDetails';

class ProductsLists extends Component{
	constructor(props) {
		super (props);

		this.state = {
			buttonName: false,
			productDetail: []
		}
		this.handleClickChangeName = this.handleClickChangeName.bind(this);
		this.dataToChaild = this.dataToChaild.bind(this);
	}

	handleClickChangeName(id){
		this.setState({
			buttonName: id
		});
	}
	// compareNames(e){
	// 	e.target.value ? "Remove" : "Compare"
	// }
	dataToChaild = (product) =>{
		// push the selected value to array then setState so that the component will re-render
		let newValue = this.state.productDetail.concat(product);
		this.setState({
			productDetail: newValue
		}); 
	}
	render(){
		const productsItems = this.props.products.data.products;
		const buttonsName = this.state.buttonName;
		console.log(buttonsName);
		// let object={};
		// if(buttonsName === "1"){
		// 	object ={a:buttonsName}
		// }else if(buttonsName === "2"){
		// 	object ={b:buttonsName}
		// }else if(buttonsName === "3"){
		// 	object ={c:buttonsName}
		// }else{
		// 	object ={d:buttonsName}
		// }
		// console.log(object.b);

		let array = [];
		if(buttonsName !== false){
			array[buttonsName] += array[buttonsName];
		}
		console.log(array.length)
	return(
		<div>
			{productsItems.map((product, index) =>
			<div className="col-sm-6 col-md-3 inlineBlock" key={product.id}>
			 <div className="product" key={product.id}>
			 <div className="image_overlay"> </div>
			 <img src={product.image} title={product.name} alt={product.name} />
					<div className="view_details" onClick={(event) =>
						{this.handleClickChangeName(product.id); this.dataToChaild(product)} }>
							{ this.state.buttonName === product.id ? "Remove" : "Compare" }
						</div>
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
			{this.state.productDetail.length >= 2 ?
				<CompareDetails thisProduct = { this.state.productDetail } />
				: null
			}
		</div>
		)
	}
	}

export default ProductsLists;