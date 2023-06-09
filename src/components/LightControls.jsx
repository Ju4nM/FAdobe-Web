import React from "react";

export function LightControls ({ lightData, toggle, key }) {
    // The following are for tailwindcss can detect that classes
    // text-green-500
    // text-red-500
    // const cardClasses = "bg-slate-900 rounded-md mx-auto p-4 flex flex-col gap-5 sm:w-3/4 w-full md:max-w-lg";
    return (
        <div className={`${lightData.status ? "border-green-600" : "border-red-600"} bg-slate-900 rounded-md mx-auto p-4 flex flex-col gap-5 sm:w-3/4 w-full md:max-w-lg border-2 transition-all`}>
            <h2 className="text-xl">Estado: <span className={`text-${lightData.status ? "green" : "red"}-500`}>{lightData.status ? "Encendida" : "Apagada"}</span></h2>
            <span>Nombre: {lightData.lightName}</span>
            <button onClick={() => toggle(lightData._id)} className={`btn ${lightData.status ? "btn-danger" : "btn-success"}`}>{lightData.status ? "Apagar" : "Encender"}</button>
        </div>
    );
}