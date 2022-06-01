import "./styless.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main_container">
			<nav className="navbar">
				<h1>Wurkr</h1>
				<button className='white_btn' onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<h1 className="wurkr-style">Welcome to Wurkr !</h1>
		</div>
	);
};

export default Main;