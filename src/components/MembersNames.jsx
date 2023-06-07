import React from "react";

export function MembersNames () {

    return (
        <div className="flex flex-col items-center gap-4 pb-5">
            <div>
                <h1 className="text-center text-3xl font-semibold">
                    Integrantes del equipo
                </h1>
                <ul>
                    <li className="text-lg mt-2 indent-2">- Fabian Enrique Mart&iacute;nez Flores</li>
                    <li className="text-lg mt-2 indent-2">- F&eacute;lix Geovanny Escalante Arredondo</li>
                    <li className="text-lg mt-2 indent-2">- Roberto Alejandro Solano V&aacute;squez</li>
                </ul>
                <p className="indent-2 text-xl mt-3"><span className="font-semibold">Grupo: </span> 3-F</p>
                <p className="indent-2 text-xl"><span className="font-semibold">Docente: </span> Francisco C&aacute;rdenas</p>
            </div>
        </div>
    );
}