import { useState } from 'react';
import './App.css';
import TableComponent from './components/TableComponent';

function App() {
  const personas = [
    { id: "1", nombre: "Maria", apellido: " Peralta", descripcion: "Locura total" },
    { id: "2", nombre: "Juan", apellido: "Perez", descripcion: "Locura total" },
    { id: "3", nombre: "Mar", apellido: "Rivera", descripcion: "Tocura total" }, 
    { id: "4", nombre: "Mar", apellido: "Rivera", descripcion: "Locura total" },
  ];
  const [data, setData] = useState(personas);
  const [modalEditar, setEditar] = useState(false);
  const [modalEliminar, setEliminar] = useState(false);
  const [modalAgregar, setAgregar] = useState(false);

  const [nombreSeleccionado, setNombreSeleccionado] = useState({
    id: '',
    nombre: '',
    apellido: '',
    descripcion: ''
  });

  const seleccionarNombre = (elemento, caso) => {
    setNombreSeleccionado(elemento);
    if (caso === 'Editar') {
      setEditar(true);
    } else {
      setEliminar(true);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNombreSeleccionado(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const editar = () => {
    const dataNew = data.map(nombre => {
      if (nombre.id === nombreSeleccionado.id) {
        return { ...nombre, nombre: nombreSeleccionado.nombre, apellido: nombreSeleccionado.apellido, descripcion: nombreSeleccionado.descripcion };
      } else {
        return nombre;
      }
    });
    setData(dataNew);
    setEditar(false);
  };
  const eliminar = () => {
    setData(data.filter(nombre => nombre.id !== nombreSeleccionado.id));
    setEliminar(false);
  };
  const abrirModalAgregar = () => {
    setNombreSeleccionado(null);
    setAgregar(true);
  };
  const agregar = () => {
    const newId = data[data.length - 1].id + 1;
    const newPersona = { id: newId, nombre: nombreSeleccionado.nombre, apellido: nombreSeleccionado.apellido, descripcion: nombreSeleccionado.descripcion };
    const dataNew = [...data, newPersona];
    setData(dataNew);
    setAgregar(false);
  };
  return (
    <>
      <TableComponent Personas={data} seleccionarNombre={seleccionarNombre} />
    </>
  );
}

export default App;