import React from 'react'

const EliminarComponent = ({ modalEliminar, setEliminar, nombreSeleccionado, eliminar }) => {
  return (
    <div>
      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Do you want to delete {nombreSeleccionado?.nombre || 'the selected item'}?
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-success' onClick={() => eliminar(nombreSeleccionado)}>Yes</button>
          <button className='btn btn-danger' onClick={() => setEliminar(false)}>No</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default EliminarComponent