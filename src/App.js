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


function App(){
	return(

		<div>
			
			<Switch>
				<Route path="/login" component={LoginPanel} />
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
			
		</div>
	);
}

export default App;