import React, { useState } from "react";
import "../App.css"
import { v4 as uuidv4 } from "uuid";

const Formulario = (props) =>{
    const [input, setInput] = useState("")

    const manejarCambio = (evento) =>{
        setInput(evento.target.value);
    }
    const manejarEnvio = (evento) => {
        evento.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
        manejarCambio("");
    }

    return (
        <form onSubmit={manejarEnvio} className="tarea-formulario">
            <input onChange={manejarCambio} type="text" className="tarea-input" placeholder="Escribe una tarea" name="texto" />
            <button className="tarea-boton" > Agregar Tarea</button>
        </form>
    );
};

export default Formulario;