import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import {
	Button,
	Chip,
	Container,
	FormControl,
	Grid,
	Paper,
	InputLabel,
	Select,
	InputAdornment,
	OutlinedInput,
	LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function Orders(props) {
	const classes = useStyles();
	const [orders, setOrders] = useState(null);
	const [refresh, setRefresh] = useState(false);
	const [query, setQuery] = useState({
		limit: 100,
	});

	useEffect(() => {
		axios(
			`${process.env.REACT_APP_BACKEND_API}transaction?${queryString.stringify(
				query,
			)}`,
		).then((result) => {
			if (result.data.status === "success") setOrders(result.data.data.orders);
		});
	}, [refresh, query]);
	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`${process.env.REACT_APP_BACKEND_API}transaction/${id}`)
					.then((response) => {
						Swal.fire("Deleted!", "Order has been deleted..", "success");
						setRefresh(!refresh);
					})
					.catch((err) => {
						Swal.fire("Opps!", "Somthing went wrong..", "error");
					});
			}
		});
	};
	const handleQueryChange = (e) => {
		setOrders(null);
		setQuery({ ...query, [e.target.name]: e.target.value });
	};

	console.log(query);
	return (
		<div className="home">
			<Container>
			<Grid container justifyContent="flex-end">
					<form onChange={handleQueryChange}>
						
						
						
						<FormControl variant="outlined" className={classes.formControl}>
							<InputLabel htmlFor="outlined-age-native-simple">
								Sort By
							</InputLabel>
							<Select
								native
								value=""
								inputProps={{
									name: "sort",
									id: "outlined-age-native-simple",
								}}>
								<option aria-label="None" value="" />
								<option value="Newest">Newest</option>
								<option value="Oldest">Oldest</option>
								
							</Select>
						</FormControl>
					</form>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Paper>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Id</TableCell>
										<TableCell align="right">Date</TableCell>
										<TableCell align="right">Qty</TableCell>
										<TableCell align="right">Grand Total</TableCell>
										
									</TableRow>
								</TableHead>
								<TableBody>
									{orders ? (
										orders.map((transaction) => (
											<TableRow key={transaction._id}>
												<TableCell component="th" scope="row">
													{transaction.id}
												</TableCell>
												<TableCell align="right">{transaction.date}</TableCell>
												<TableCell align="right">
												{transaction.qty}
												</TableCell>
												<TableCell align="right">
												{transaction.grandtotal}
												</TableCell>
												

												<TableCell align="right">
													<Link to={`${props.match.path}/update/${transaction._id}`}>
														<EditIcon />
													</Link>
													<DeleteIcon onClick={() => handleDelete(transaction._id)} />
												</TableCell>
											</TableRow>
										))
									) : (
										<Grid
											container
											style={{ width: "100%" }}
											justifyContent="center">
											<LinearProgress
												style={{ height: "20px", width: "100%" }}
											/>
										</Grid>
									)}
								</TableBody>
							</Table>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Orders;