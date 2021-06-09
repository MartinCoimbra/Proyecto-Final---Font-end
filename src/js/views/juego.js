import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Juego = () => {
	const { store, actions } = useContext(Context);
	const [num, setNum] = useState(20);
	const [pause, setPause] = useState(false);
	let intervalRef = useRef();
	const decreaseNum = () => setNum(prev => prev - 1);
	const [num2, setNum2] = useState(0);
	const [fondo, setFondo] = useState("bg-white");
	/* Respuesta va a ser la posicion de la respuesta correcta */
	const [respuestaC, setRespuesta] = useState();
	const [resFV, setResFV] = useState("");

	const pauseA = () => {
		if (!pause) {
			clearInterval(intervalRef.current);
		} else {
			intervalRef.current = setInterval(decreaseNum, 600);
		}
		setPause(prev => !prev);
	};

	/* Cuando llegue a 0 pausar */
	if (num == 0 || num < 0) {
		clearInterval(intervalRef.current);
	}
	useEffect(() => {
		setPause(false);
		intervalRef.current = setInterval(decreaseNum, 600);
		return () => clearInterval(intervalRef.current);
	}, []);
	if (num >= 0) {
		useEffect(() => {
			let numPositivo = 20 - num;
			setNum2(numPositivo);
			if (num == 5) {
				setFondo("bg-danger rounded");
			} else if (num == 3) {
				setFondo("bg-danger rounded");
			} else if (num == 1) {
				setFondo("bg-danger rounded");
			} else {
				setFondo("bg-white rounded");
			}
		});
	}
	/* pausa */
	const handleClick = () => {
		if (!pause) {
			clearInterval(intervalRef.current);
		}
	};

	const [btn1, setBtn1] = useState();
	const [btn2, setBtn2] = useState();
	const [btn3, setBtn3] = useState();

	/* hacer un random de 3 y que los cosos eligan cual es la respuesta correcta */
	const numAleatorio = () => {
		let respuestaCorrecta = Math.floor(Math.random() * (3 - 1 + 1) + 1);
		setRespuesta(respuestaCorrecta);

		/* Validamos la respuesta y le damos valor al btn 1 */
		respuestaCorrecta == 1
			? setBtn1(store.preguntasYresp[0].respuesta[0].opcion_correcta)
			: respuestaCorrecta == 2
				? setBtn1(store.preguntasYresp[0].respuesta[0].opcion_b)
				: respuestaCorrecta == 3
					? setBtn1(store.preguntasYresp[0].respuesta[0].opcion_c)
					: "";
		/* Validamos la respuesta 2 le damos valor al btn 2 */
		respuestaCorrecta == 1
			? setBtn2(store.preguntasYresp[0].respuesta[0].opcion_c)
			: respuestaCorrecta == 3
				? setBtn2(store.preguntasYresp[0].respuesta[0].opcion_b)
				: respuestaCorrecta == 2
					? setBtn2(store.preguntasYresp[0].respuesta[0].opcion_correcta)
					: "";
		/* Validamos la respuesta 3 le damos valor al btn 3 */
		respuestaCorrecta == 1
			? setBtn3(store.preguntasYresp[0].respuesta[0].opcion_b)
			: respuestaCorrecta == 2
				? setBtn3(store.preguntasYresp[0].respuesta[0].opcion_c)
				: respuestaCorrecta == 3
					? setBtn3(store.preguntasYresp[0].respuesta[0].opcion_correcta)
					: "";
	};

	useEffect(() => {
		numAleatorio();
	}, []);

	const respuestaCorrectaVerific = resp => {
		if (store.preguntasYresp[0].respuesta[0].opcion_correcta === resp) {
			console.log("Tu respuesta es correcta");
			setNum(0);
			setResFV("Correcta!");
		} else {
			console.log("NOOOOOO");
			setResFV("Incorrecta D:!");
			setNum(0);
		}
	};
	/* Cada vez que pase a la siguiente pregunta en un btn siguiente incrementar el [0] por 1  */
	/* preguntasYresp[0] */
	/* Al hacer click le mandamos el num de la resp que le hicimos click 
        y si concide el num por parametro a respuesttaC= num */
	return (
		<div className="container-fluid fondoTop px-0 mx-0 mt-4">
			<div className="container paleta5 rounded border my-5">
				<div className="row justify-content-between p-5">
					<div className="col-2">
						<button className="btn btn-danger">Salir</button>
					</div>
					<div className="col-8 text-center text-white">
						<h1>{store.preguntasYresp[0].preguntado.nombre}</h1>
					</div>
					<div className="col-2" />
					<div className="col-3">
						<p className="mt-3 p-2 bg-white rounded">Puntos:</p>
						<p className="mt-3 p-2 bg-white rounded">Partidas 1/5</p>
					</div>
					<div className="col-5 px-0 text-center">
						<img
							src={store.preguntasYresp[0].foto_pregunta}
							className="figure-img img-fluid rounded w-75"
							alt="..."
						/>
					</div>
					<div className="col-3">
						<div className={"mt-3 p-2 pb-3 d-flex justify-content-between " + fondo}>
							<p className="align-middle mt-3 pl-3 h4">Tiempo: </p>
							<p className="align-middle mt-3 px-0 h4 text-dark">{num} </p>
							<img
								className="w-25 pr-3 py-2"
								src="https://ayuda.mascaradelatex.com/hc/article_attachments/1500004826121/reloj.gif"
							/>{" "}
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<div className="cuadrodepregunta w-100 pt-2 pb-2 text-center">
							<p className="h4">{store.preguntasYresp[0].preguntas}</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center pb-5 mt-2">
					<div className="col-3">
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped"
								style={{
									width: Math.floor(num2 * 100) / 20 + "%"
								}}
								role="progressbar"
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax={(20 * 100) / 20}
							/>
						</div>
					</div>
				</div>
				<div className="row justify-content-center pb-5 mt-2">
					<div className="col-5">
						<h3 className="text-white">Tu respuesta es: {resFV} </h3>
					</div>
				</div>
				<div className="row justify-content-center pb-5 mt-2">
					<div className="col-5 d-flex justify-content-between">
						{/* BOTON 1 */}
						<button
							onClick={() => {
								respuestaCorrectaVerific(btn1);
								handleClick;
							}}
							className="btn btn-primary">
							{respuestaC == 1
								? store.preguntasYresp[0].respuesta[0].opcion_correcta
								: respuestaC == 2
									? store.preguntasYresp[0].respuesta[0].opcion_b
									: respuestaC == 3
										? store.preguntasYresp[0].respuesta[0].opcion_c
										: ""}
						</button>
						{/* BOTON 2 */}

						<button
							onClick={() => {
								respuestaCorrectaVerific(btn2);
								handleClick;
							}}
							className="btn btn-primary">
							{respuestaC == 1
								? store.preguntasYresp[0].respuesta[0].opcion_c
								: respuestaC == 3
									? store.preguntasYresp[0].respuesta[0].opcion_b
									: respuestaC == 2
										? store.preguntasYresp[0].respuesta[0].opcion_correcta
										: ""}
						</button>
						{/* BOTON 3 */}

						<button
							onClick={() => {
								respuestaCorrectaVerific(btn3);
								handleClick;
							}}
							className="btn btn-primary">
							{respuestaC == 1
								? store.preguntasYresp[0].respuesta[0].opcion_b
								: respuestaC == 2
									? store.preguntasYresp[0].respuesta[0].opcion_c
									: respuestaC == 3
										? store.preguntasYresp[0].respuesta[0].opcion_correcta
										: ""}
						</button>
						<h1 className="text-white">{respuestaC}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
