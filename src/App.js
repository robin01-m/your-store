import "./App.css";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Dashboard from "./components/screens/Dashboard";
import LoginPanel from "./components/screens/LoginPanel";
import DashboardPanel from "./components/DashboardPanel";
import Panel from "./components/Panel";
import Transactions from "./components/Transactions";
import Products from "./components/Products";
import ProductForm from "./components/ProductForm";
import Categories from './components/Categories';
import CategoriesForm from './components/CategoriesForm';
import React, { useState, useEffect } from "react";
import axios from "./components/utils/axiosConfig";

export const CartContext = React.createContext();
export const SettingsContext = React.createContext();

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [allProducts, setAllProducts] = useState(null);
	const [storeSettings, setStoreSettings] = useState(null);
	const handleQtyChange = (id, type) => {
		let index = cartItems.findIndex((item) => item._id === id);
		if (index !== -1) {
			let newCartItems = [...cartItems];
			if (newCartItems[index]["qty"] === 1 && type === "decrement") return;
			type === "increment"
				? newCartItems[index]["qty"]++
				: newCartItems[index]["qty"]--;

			setCartItems(newCartItems);
		}
	};

	const handleCartDelete = (id) => {
		let index = cartItems.findIndex((item) => item._id === id);
		let newCartItems = [...cartItems];
		newCartItems.splice(index, 1);
		setCartItems(newCartItems);
	};
	const removeAllCartItems = () => {
		setCartItems([]);
	};

	const handleSelection = (id) => {
		let index = cartItems.findIndex((item) => item._id == id);
		if (index === -1) {
			let product = allProducts.find((product) => product._id === id);
			product.qty = 1;
			product.price = +product.price;
			setCartItems([...cartItems, product]);
		} else {
			let newCartItems = [...cartItems];
			newCartItems.splice(index, 1);
			setCartItems(newCartItems);
		}
	};
	useEffect(() => {
		axios("product?limit=100000").then((result) =>
			setAllProducts(result.data.data.products),
		);
		axios("setting").then((result) => setStoreSettings(result.data.data));
	}, []);




	return(

		<div>
			<CartContext.Provider
				value={{
					cartItems,
					handleQtyChange,
					handleSelection,
					handleCartDelete,
					removeAllCartItems,
				}}>
				<SettingsContext.Provider value={storeSettings}>
			
			<Switch>
			<Route path="/login" component={LoginPanel} />
						<Route
							path="/dashboard"
							render={(props) => {
								if (localStorage.getItem("token"))
									return <Dashboard {...props} />;
								return <Redirect to="/login" />;
							}}
						/>
				<Route
					path="/dashboard" component={Dashboard}
				/>
				<Route path="/dashboardpanel" component={DashboardPanel} />
				<Route path="/users/new" component={UserForm} />
				<Route path="/users" component={Users} />
				<Route path="/home" component={Home} />
				<Route path="/products" component={Products} />
				<Route path="/products/new" component={ProductForm} />
				<Route path="/categories" component={Categories} />
				<Route path="/categories/new" component={CategoriesForm} />
				<Route path="/panel" component={Panel} />
				<Route path="/transaction" component={Transactions} />
				<Route path="/404" component={NotFound} />
				<Redirect from="/" to="/404" />
			</Switch>
			</SettingsContext.Provider>
			</CartContext.Provider>
		</div>
		
	);
}

export default App;