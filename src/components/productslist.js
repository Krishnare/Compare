import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompareDetails from './compareDetails';

class ProductsLists extends Component{
	constructor(props) {
		super (props);

		this.state = {
			buttonName: "Comare",
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
<<<<<<< HEAD

	dataToChaild = (product, id) =>{
=======
	// compareNames(e){
	// 	e.target.value ? "Remove" : "Compare"
	// }
	dataToChaild = (product) =>{
>>>>>>> 759505cd134c035a2bd77d66ad6a3c2d3b226a4a
		// push the selected value to array then setState so that the component will re-render
		let newValue = this.state.productDetail.concat(product);
		let result =[];
		
		if(document.getElementById(id).innerHTML === "Compare"){
			this.setState({
				productDetail: newValue
			});
		}

		//Removing Details
		if(document.getElementById(id).innerHTML === "Remove"){
			var jobsUnique = newValue.filter(function(item, index){
				return newValue.indexOf(item) >= index;
			});
			jobsUnique.map(function(item, index, totalItems){
				if(item.id === id){
					totalItems.splice(index, 1);
				}
			});
			this.setState({
				productDetail: jobsUnique
			});
		}
	}
	render(){
		//START Updating the Buttons Text
		const productsItems = this.props.products.data.products;
		const buttonsName = this.state.buttonName;
		console.log(buttonsName);
<<<<<<< HEAD
		let buttonNameObj = {1: undefined, 2: undefined, 3: undefined, 4: undefined};
		let changeButtonName = 'Compare';
		for(var prop in buttonNameObj){
			if(prop === buttonsName){
				buttonNameObj[prop] = buttonsName;
			}
			if(buttonNameObj[prop] !== undefined){
				var innerText = document.getElementById(buttonsName).innerHTML
				if(innerText === "Compare"){
					document.getElementById(buttonsName).innerHTML = "Remove";
				}else{
					document.getElementById(buttonsName).innerHTML = "Compare";
				}
			}
		}

		//END Updating the Buttons Text
=======
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
>>>>>>> 759505cd134c035a2bd77d66ad6a3c2d3b226a4a
	return(
		<div>
			{productsItems.map((product, index) =>
			<div className="col-sm-6 col-md-3 inlineBlock" key={product.id}>
			 <div className="product" key={product.id}>
			 <div className="image_overlay"> </div>
			 <img src={product.image} title={product.name} alt={product.name} />
<<<<<<< HEAD
					<div className="view_details" id = {product.id} onClick={(event) =>
						{this.handleClickChangeName(product.id); this.dataToChaild(product, product.id)} }>
							{ changeButtonName }
=======
					<div className="view_details" onClick={(event) =>
						{this.handleClickChangeName(product.id); this.dataToChaild(product)} }>
							{ this.state.buttonName === product.id ? "Remove" : "Compare" }
>>>>>>> 759505cd134c035a2bd77d66ad6a3c2d3b226a4a
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