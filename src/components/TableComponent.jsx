import React from "react";

function TableComponent({ Personas, seleccionarNombre, abrirModalAgregar }) {
  return (
    <div>
      <button type="button" onClick={()=>abrirModalAgregar}>Add</button>
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Last name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Personas.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.id}</td>
              <td>{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>{persona.descripcion}</td>
              <td>
                <button onClick={() => seleccionarNombre(persona, 'Editar')}>Edit</button>
                <button onClick={() => seleccionarNombre(persona, 'Eliminar')}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;