import React from 'react'

function ActualizarComponent({ modalEditar, setEditar, nombreSeleccionado, editar, handleChange }) {
  return (
    <div>
      <Modal show={modalEditar} onHide={() => setEditar(false)}>
        <ModalHeader>
          <h3>Edit</h3>
        </ModalHeader>

        <ModalBody>
          <div className='form-group'>
            <span >Id</span>
            <input className='form-control' type="text" readOnly name='id' value={nombreSeleccionado?.id} />
          </div>

          <div className='form-group'>
            <span  >Name</span>
            <input className='form-control' type="text" name='nombre' value={nombreSeleccionado?.nombre} onChange={handleChange} />
          </div>

          <div className='form-group'>
            <span >Last name</span>
            <input className='form-control' type="text" name='apellido' value={nombreSeleccionado?.apellido} onChange={handleChange} />
          </div>

          <div className='form-group'>
            <span >Description</span>
            <input className='form-control' type="text" name='descripcion' value={nombreSeleccionado?.descripcion} onChange={handleChange} />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-success' onClick={() => editar(nombreSeleccionado)}>Update</button>
          <button className='btn btn-danger' onClick={() => setEditar(false)}>Cancel</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ActualizarComponent