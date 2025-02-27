import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { PayPal } from "../component/paypal";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar  fixed-top">
			<Link to="/" className="navbar-brand mb-0 h1 d-sm-block d-flex">
				<span className=" btn--2 text-white">JUDYA</span>
			</Link>
			<div className={store.logeado == false ? "d-block ml-auto" : "d-none"}>
				<Link className="text-decoration-none" to="/">
					<span className="btn--2 mr-3 text-white">Inicio</span>
				</Link>
				<Link className="text-decoration-none" to="/acercade">
					<span className="btn--2 mr-3 text-white">Acerca de</span>
				</Link>
				<Link className="text-decoration-none" to="/top">
					<span className="btn--2 mr-3 text-white">Top</span>
				</Link>
				<Link className="text-decoration-none" to="/sabiasque">
					<span className="btn--2 mr-5 text-white">Curiosidades</span>
				</Link>
				<Link className="text-decoration-none" to="/login">
					<span className="btn--2 mr-3 text-white">Login</span>
				</Link>
				<Link className="text-decoration-none" to="/registro">
					<span className="btn--2 mr-3 text-white">Registro</span>
				</Link>
			</div>
			<div className={store.logeado == false ? "d-none" : "d-block ml-auto"}>
				<Link className="text-decoration-none" to="/">
					<span className="btn--2 mr-3 text-white">Inicio</span>
				</Link>
				<Link className="text-decoration-none" to="/acercade">
					<span className="btn--2 mr-3 text-white">Acerca de</span>
				</Link>
				<Link className="text-decoration-none" to="/top">
					<span className="btn--2 mr-3 text-white">Top</span>
				</Link>
				<Link className="text-decoration-none" to="/sabiasque">
					<span className="btn--2 mr-3 text-white">Curiosidades</span>
				</Link>

				<Link className="text-decoration-none " to="/paypal">
					<span className="btn--2 mr-3 text-white">Comprar Coins</span>
				</Link>
				<Link
					to="/perfil"
					onClick={() => {
						actions.getCoin();
					}}
					className="btn--2 mr-5 text-white text-decoration-none">
					Perfil
				</Link>

				<Link to="/" onClick={actions.actionRemove} className="btn--3 mr-3 text-white text-decoration-none">
					Cerrar sesión
				</Link>
			</div>
		</nav>
	);
};
