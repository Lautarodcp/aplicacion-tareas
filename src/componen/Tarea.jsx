import React from "react";
import "../App.css"
import { AiOutlineCloseCircle } from "react-icons/ai" 


const Tarea = (props)=> {
    return (
        <div className={props.completada ? "tarea-contenedor completada":"tarea-contenedor"} >
            <div className="tarea-texto" onClick={()=> props.completarTarea(props.id)}>
                {props.texto}
            </div>
            <div className="tarea-contenedor-iconos" onClick={()=> props.eliminarTarea(props.id)}>
                <AiOutlineCloseCircle className="tarea-icono"/>
            </div>
        </div>
    );
};

export default Tarea;