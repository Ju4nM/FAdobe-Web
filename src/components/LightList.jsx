import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { LightControls } from './LightControls';

// let socket = io("https://fadobe.up.railway.app");
let socket = io(process.env.REACT_APP_BACKEND_URL);

function extractLightData(lights) {
	return lights.reduce((acc, light) => {
		acc[light._id] = light;
		return acc;
	}, {});
}

export function LightList() {
	function toggleLight(id) {
		socket.emit("toggleLight", { id });
	}

	function setNewLightData(lightData) {
		let data = extractLightData(lightData);
		setLights(data);
	}

	let [lights, setLights] = useState({});
	let [error, setError] = useState("");
	let [loading, setLoading] = useState(true);

	useEffect(() => {
		socket.on("connection", lights => {
			setNewLightData(lights)
			setError("");
			setLoading(false)
		});

		socket.on("onLightToggled", lights => setNewLightData(lights));

		socket.on("connect_error", () => {
			setLoading(false);
            setLights({});
			setError("Ocurrio un problema al intentar conectarse al servidor 🙁")
		});
		
		// setError("Ocurrio un problema al intentar conectarse al servidor 🙁")
		return () => {
			socket.off("connection");
			socket.off("onLightToggled");
		};
	}, []);

	return (
		<div>
            <h1 className = "text-3xl text-center font-semibold">Luces</h1>
            <div className = "flex flex-col gap-4 mt-4">
                {Object.values(lights).map((light, key) => (
                    <React.Fragment key={light._id}>
                        <LightControls lightData={light} toggle={toggleLight} />
                    </React.Fragment>
                ))}
				<span className={`${loading ? "" : "hidden"} text-center text-lg`}>Cargando ....</span>
				<span className="text-center text-lg">{error}</span>
            </div>
		</div>
	);
}
