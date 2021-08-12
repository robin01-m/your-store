import React from "react";
import { Route, Switch } from "react-router-dom";

import Sidebar from "../Sidebar";
import Users from "../Users";
import "./dashboard.css";
import Products from "../Products";
import Transactions from "../Transactions";
import Categories from "../Categories";
import Orders from "../Orders";
import UserForm from "../UserForm";
import DashboardPanel from "../DashboardPanel";
import ProductForm from "../ProductForm";
import CategoriesForm from "../CategoriesForm";

function Dashboard(props) {
	return (
		<div class="m-dashboard">
			<div className="content-wrap">
				<div className="d-sidebar">
					<Sidebar />
				</div>
				<div className="d-main">
					<Switch>
						<Route
							path={`${props.match.path}/users/new`}
							component={UserForm}
						/>
						<Route
							path={`${props.match.path}/users/update/:id`}
							component={UserForm}
						/>
						<Route path={`${props.match.path}/users`} component={Users} />
						<Route
							path={`${props.match.path}/products/new`}
							component={ProductForm}
						/>
						<Route
							path={`${props.match.path}/products/update/:id`}
							component={ProductForm}
						/>
						<Route path={`${props.match.path}/products`} component={Products} />
						<Route
							path={`${props.match.path}/transaction`}
							component={Transactions}
						/>
						<Route path={`${props.match.path}/categories/new`} component={CategoriesForm} />
						<Route
							path={`${props.match.path}/categories/update/:id`}
							component={CategoriesForm}
						/>
						<Route
							path={`${props.match.path}/categories`}
							component={Categories}
						/>
						<Route path={`${props.match.path}/orders`} component={Orders} />
						<Route path={`${props.match.path}/`} component={DashboardPanel} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;