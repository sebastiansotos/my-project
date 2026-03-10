import React, { useState } from 'react';

export const Segundocomponente = () => {
  // Estado 1: Maneja la lista de notas existentes
  const [notas, setNotas] = useState([
    
  ]);

  // Estado 2: Maneja el texto que se está escribiendo en el input actualmente
  const [nuevaNotaTexto, setNuevaNotaTexto] = useState('');

  // Función para manejar la interacción de hacer clic en una nota (p. ej., eliminarla)
  const eliminarNota = (indexParaEliminar) => {
    // Filtra la lista para crear una nueva lista sin la nota seleccionada
    const notasActualizadas = notas.filter((_, index) => index !== indexParaEliminar);
    setNotas(notasActualizadas);
 
  };

  // Función para manejar el evento de añadir una nueva nota
  const anadirNota = () => {
    // Verifica que el campo de texto no esté vacío
    if (nuevaNotaTexto.trim() === '') {
      alert('Por favor, escribe una nota.');
      return;
    }
    
    // Crea una nueva lista añadiendo la nota al final
    setNotas([...notas, nuevaNotaTexto]);
    // Limpia el input después de añadir la nota
    setNuevaNotaTexto('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Cosas hechas</h2>
      
      {/* Sección para añadir nuevas notas con el placeholder */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          // EL PLACEHOLDER: Texto que se muestra cuando el input está vacío
          placeholder="Anota algo aquí..." 
          value={nuevaNotaTexto}
          onChange={(e) => setNuevaNotaTexto(e.target.value)} // Captura lo que se escribe
          style={{ padding: '8px', width: '70%', marginRight: '10px' }}
        />
        <button onClick={anadirNota} style={{ padding: '8px 15px' }}>
          Añadir
        </button>
      </div>

      <p>Haz clic en una nota para eliminarla:</p>
      
      <ul>
        {notas.map((nota, index) => (
          <li 
            key={index} 
            onClick={() => eliminarNota(index)} // Ahora el clic elimina la nota
            style={{ 
              cursor: 'pointer', 
              color: 'darkred',
              marginBottom: '5px',
              borderBottom: '1px solid #eee',
              padding: '5px 0'
            }}
          >
            {nota}
          </li>
        ))}
      </ul>
    </div>
  );
};
