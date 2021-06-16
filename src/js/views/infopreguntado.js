import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { Comentario } from "../component/comentario";

export const Infopreguntado = () => {
	const { store, actions } = useContext(Context);
	const [cant, setCant] = useState(0);
	const [startA, setStartA] = useState("");
	const [home, setHome] = useState(false);
	/* startActive */
	return (
		<div className="container-fluid px-0 mx-0 mt-5">
			<div className="container fondoperfil rounded p-3 mt-5 mb-3">
				<div className="row mb-5">
					<div className="col-12 col-md-6">
						<img src={store.preguntadoEs[0].url_foto} className="rounded w-100 infoimgH mb-2" alt="..." />
					</div>
					<div className="col-12 col-md-6">
						<h1 className="text-center">{store.preguntadoEs[0].nombre}</h1>
						<p>
							{store.preguntadoEs[0].descripcion} <br />
							{/* {store.preguntadoEs[0].categoria.name} */}
						</p>
					</div>
					<div className="col-6">
						<Link to="/">
							<button className="btn btn-outline-dark">Volver</button>
						</Link>
					</div>
					<div className="col-12 col-md-6 text-center text-warning h2 ">
						<i className="fas fa-star start" />
						<i className="fas fa-star start" />
						<i className="fas fa-star start" />
						<i className="fas fa-star start" />
						<i className="fas fa-star start" />
					</div>
				</div>
				<div className="container contenedorTop width2">
					{/* Aqui va el map de los comentarios */}
					{store.comentariosDelPreguntado.map((element, i) => {
						return <Comentario key={i} posicion={i} />;
					})}
				</div>
				<div className="container mt-3 border width2 p-4">
					<h4>¡Cuentanos que opinas sobre este post!</h4>
					<div className="form-group ">
						<label htmlFor="exampleFormControlTextarea1">¡Tu comentario es importante!</label>
						<textarea
							onChange={actions.comentarioData}
							name="comentario"
							className="form-control textArea"
							id="exampleFormControlTextarea1"
							rows="4"
						/>
					</div>
					<div className="w-100 text-right h5 h2-sm">
						<div className=" d-flex mr-4">
							<i
								onClick={() => {
									actions.calificacionData(1);
									setCant(1);
								}}
								className={
									cant == 1 || cant == 2 || cant == 3 || cant == 4 || cant == 5
										? "fas fa-star start hoverStart1 startActive"
										: "fas fa-star start hoverStart1"
								}
							/>
							<i
								onClick={() => {
									actions.calificacionData(2);
									setCant(2);
								}}
								className={
									+cant == 2 || cant == 3 || cant == 4 || cant == 5
										? "fas fa-star start hoverStart2 startActive"
										: "fas fa-star start hoverStart2 "
								}
							/>
							<i
								onClick={() => {
									actions.calificacionData(3);
									setCant(3);
								}}
								className={
									cant == 3 || cant == 4 || cant == 5
										? "fas fa-star start hoverStart3  startActive"
										: "fas fa-star start hoverStart3 "
								}
							/>
							<i
								onClick={() => {
									actions.calificacionData(4);
									setCant(4);
								}}
								className={
									cant == 4 || cant == 5
										? "fas fa-star start hoverStart4 startActive"
										: "fas fa-star start hoverStart4"
								}
							/>
							<i
								onClick={() => {
									actions.calificacionData(5);
									setCant(5);
								}}
								className={
									cant == 5
										? "fas fa-star start hoverStart5 startActive"
										: "fas fa-star start hoverStart5 "
								}
							/>
						</div>
						<div>
							<Link
								onClick={() => {
									if (store.logeado == false) {
										Swal.fire({
											title: "¡Hey!",
											text: "¡Para comentar un preguntado tienes que loguearte!",
											icon: "info",
											confirmButtonText: "Ok"
										});
									} else if (store.comentarioData.comentario === "") {
										Swal.fire({
											title: "¡Ups!😅",
											text: "¡No te olvides de poner un comentario!",
											icon: "warning",
											confirmButtonText: "Ok"
										});
									} else if (store.comentarioData.calificacion === 0) {
										Swal.fire({
											title: "⭐⭐⭐⭐⭐",
											text: "¡Recuerda que tu calificacion es importante!",
											icon: "warning",
											confirmButtonText: "Ok"
										});
									} else {
										Swal.fire({
											title: "¡Yesss! 😎",
											text: "¡Tu comentario se realizó con éxito!",
											icon: "info",
											confirmButtonText: "Ok"
										});
										actions.postComentario();
										setHome(true);
									}
								}}
								to={store.logeado == false ? "/login" : console.log("")}
								className="btn btn-success">
								Comentar
							</Link>
							{home === true ? <Redirect to="/" /> : ""}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
