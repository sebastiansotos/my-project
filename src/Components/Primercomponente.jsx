import React, { useState } from 'react';

export const Primercomponente = () => {

    // 1. Estado para la lista de personas (Usamos IDs únicos para evitar error removeChild)
    const [personas, setPersonas] = useState([
    
    ]);
    
    // 2. Estado para el texto del input
    const [inputTexto, setInputTexto] = useState('');

    // Función que se dispara al hacer clic en un nombre (elimina el nodo correctamente)
    const eliminarPersona = (idAEliminar) => {
        // Filtramos la lista para quitar el elemento con ese ID
        const listaActualizada = personas.filter(persona => persona.id !== idAEliminar);
        setPersonas(listaActualizada);
        // React ahora sabe exactamente qué nodo eliminar, evitando el error removeChild
    };

    // Función para añadir una nueva persona a la lista
    const anadirPersona = () => {
        if (inputTexto.trim() === '') {
            alert("El campo está vacío.");
            return;
        }

        const nuevaPersona = {
            id: Date.now(), // ID único basado en la hora actual
            nombre: inputTexto
        };

        setPersonas([...personas, nuevaPersona]);
        setInputTexto(''); // Limpiar el input
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Lista de cosas por hacer</h1>
            
            {/* Input y Botón para añadir a la lista */}
            <input
                type="text"
                placeholder="Añadir nuevo nombre aquí..." // El placeholder solicitado
                value={inputTexto}
                onChange={(e) => setInputTexto(e.target.value)}
                style={{ padding: '7px', width: '50%', marginRight: '5px' }}
            />
            <button onClick={anadirPersona} style={{ padding: '8px 14px' }}>
                Añadir a la lista
            </button>

            <p>Haz clic en una nota para eliminarla</p>
            <ul>

                {/* Usamos el ID como KEY para prevenir el error removeChild */}
                {personas.map((persona) => (
                    <li 
                        key={persona.id} // SOLUCIÓN AL ERROR removeChild
                        onClick={() => eliminarPersona(persona.id)}
                        style={{ cursor: 'pointer', color: 'darkred', textDecoration: 'underline' }}>
                        {persona.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
};
