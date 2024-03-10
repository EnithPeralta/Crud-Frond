import React from 'react'

const AgregarComponent = ({ abrirModalAgregar, setAgregar, data, agregar, nombreSeleccionado, setNombreSeleccionado }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNombreSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <Modal isOpen={abrirModalAgregar}>
        <ModalHeader>
          <h3>Add</h3>
        </ModalHeader>
        <ModalBody>
          <div className='form-group'>
            <span >Id</span>
            <input className='form-control' type="text" readOnly name='id' value={data[data.length-1].id+1} />
          </div>

          <div className='form-group'>
            <span  >Name</span>
            <input className='form-control' type="text" name='nombre' value={nombreSeleccionado?.nombre || ''} onChange={handleChange} />
          </div>

          <div className='form-group'>
            <span >Last name</span>
            <input className='form-control' type="text" name='apellido' value={nombreSeleccionado?.apellido || ''} onChange={handleChange} />
          </div>

          <div className='form-group'>
            <span >Description</span>
            <input className='form-control' type="text" name='descripcion' value={nombreSeleccionado?.descripcion || ''} onChange={handleChange} />
          </div>
        </ModalBody>
        <ModalFooter>
          <button onClick={()=>agregar(nombreSeleccionado)}>Add</button>
          <button onClick={()=>setAgregar(false)}>Cancel</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AgregarComponent