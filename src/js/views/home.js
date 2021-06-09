import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Cards } from "../component/card";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center container-fluid fondoTop">
			<div className="row h-75">
				<div className="col-12 px-0">
					<div id="carouselExampleIndicators" className="carousel slide" htmlData-ride="carousel">
						<ol className="carousel-indicators">
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="0" className="active" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="1" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="2" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="3" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="4" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="5" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="6" />
							<li htmlData-target="#carouselExampleIndicators" htmlData-slide-to="7" />
						</ol>
						<div className="carousel-inner h-100">
							<div className="carousel-item active h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/arte.gif?raw=true"
									className="d-block w-100 h-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/ciencia.gif?raw=true"
									className="d-block w-100 h-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/ciencias%20sociales.gif?raw=true"
									className="d-block w-100 h-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/deportes.gif?raw=true"
									className="d-block w-100 h-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/entretenimiento.gif?raw=true"
									className="d-block w-100 h-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/geografia.gif?raw=true"
									className="d-block w-100 h-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/mates.gif?raw=true"
									className="d-block w-100 h-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item h-100">
								<img
									src="https://github.com/Niukeitor/imagenesPF/blob/main/programacion.gif?raw=true"
									className="d-block w-100 h-100"
									alt="..."
								/>
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row my-4 fondoPerson justify-content-between">
					<div className="row col-3 ml-4">
						<div className="col-5 d-flex align-items-center">
							<button className="btn btn-primary bg-danger mt-3">Play!</button>
						</div>
						<div className="col-7">
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect1">Categorias</label>
								<select
									onChange={actions.filtradoTrue}
									className="form-control"
									name="categoria"
									id="examplesFormControlSelect1">
									{store.categorias.map(element => (
										<option key={element.value} value={element.id}>
											{element.name}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
					<div className="col-6 d-flex align-items-center justify-content-center w-100">
						<h1>JUDYA</h1>
					</div>
					<div className="row col-3 d-flex align-items-center">
						<Link to={store.logeado == true ? "/postpreguntado" : "/login"}>
							<button className="btn btn-primary bg-success mt-3">Publicar un preguntado</button>
						</Link>
					</div>
				</div>

				<div className="contenedor">
					<div className="row px-0 mx-0">
						{/* Mapeo de 5 preguntados. aleatorio, Nota:Mapear segun la categoria seleccionada luego */}
						{store.preguntados.map((element, i) => {
							return (
								<Cards
									key={element.id}
									id={element.id}
									nombre={element.nombre}
									img={element.url_foto}
									descripcion={element.descripcion}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
