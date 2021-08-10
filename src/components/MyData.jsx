import React, { useState, useEffect } from "react";
import { paginate, makeArrayFromANumber, sorting } from "./utils/Utils";
var allUsers = [];
function Users() {
	let [users, setUsers] = useState([]);
	const [pageSize, setPageSize] = useState(80);
	const [currentPage, setCurrentPage] = useState(0);
	const [sortColumn, setSortColumn] = useState("id");
	const [sortOrder, setSortOrder] = useState("asc");
	//pagination
	let data = paginate(users, currentPage, pageSize);
	//sorting
	data = data.length && sorting(data, sortColumn, sortOrder);
	let totalLink = Math.ceil(users.length / pageSize);
	let linksArray = makeArrayFromANumber(totalLink);

	useEffect(() => {
		async function getUsers() {
			let result = await fetch(
				"https://60f5b35f18254c00176dffed.mockapi.io/students",
			);
			let data = await result.json();
			allUsers = data;
			setUsers(data);
		}
		getUsers();
	}, []);
	console.log(allUsers);

	const handlePageChange = (linkNo) => {
		if (linkNo === "previous") setCurrentPage(currentPage - 1);
		else if (linkNo === "next") setCurrentPage(currentPage + 1);
		else setCurrentPage(linkNo);
	};
	const handleSort = (key) => {
		setSortColumn(key);
		setSortOrder(sortOrder === "asc" ? "desc" : "asc");
	};
	const handleSearch = (e) => {
		let searchKeywords = e.target.value.toLowerCase();

		let filtered = allUsers.filter((user) => {
			let a = user.name.toLowerCase();
			return a.search(searchKeywords) !== -1;
		});
		setUsers(filtered);
	};

	const handleFiltering = (e) => {
		let filtered = allUsers.filter(
			(user) => user.verification === e.target.checked,
		);
		setUsers(filtered);
	};


	return (
		
		<div className="body">
			<h1 className="mt-2 data" >ACCOUNT HOLDERS DATA</h1>
			<div className="mt-3 search-bar-wrapper">
				<input
					onKeyUp={handleSearch}
					type="email"
					className="form-control"
					id="exampleFormControlInput1"
					placeholder="Search the users...."
				/>
			</div>

			<div className="table-wrapper shadow p-3 rounded">
				<table className="table m-table">
					<thead>
						<tr>
                        <th className="name">ID</th>
                    <th onClick={() => handleSort('name')} className="name">NAME</th>
                    <th className="name"> ACCOUNT NUMBER</th>
                    <th className="name">PHOTO</th>
                    <th onClick={() => handleSort('accountbalance')}className="name">ACCOUNT BALANCE</th>
					<th className="name">LOCATION</th>
					
							<th className="name">	ACCOUNT VERIFICATION
								<input
									onClick={handleFiltering}
									className="ml-4"
									type="checkbox"
								/>
								</th>
						</tr>
					</thead>
					<tbody className="">
                    {
							data.length &&
								data.map((user) => (
									<tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.accountno}</td>
                                <td>
										<img className="avatar" src={user.avatar} alt="" />
									</td>
                                <td>{user.accountbalance}</td>
                                <td>{user.city}</td>
								<td>{user.verification? "Verified" : "NOT Verified"}</td>
                            </tr>
                        ))
                    }
                </tbody>
				</table>
			</div>
			<div className="pagination-block">
				<nav aria-label="Page navigation example">
					<ul className="pagination">
						<li className="page-item ">
							<a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
								Previous
							</a>
						</li>
						{linksArray.map((link) => (
							<li
								onClick={() => handlePageChange(link)}
								className={`page-item ${currentPage === link && "active"} `}>
								<a className="page-link" href="#">
									{link + 1}
								</a>
							</li>
						))}
						<li  className="page-item ">
							<a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
								Next
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Users;
