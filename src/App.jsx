import './App.css'
import { Button, Checkbox, InputAdornment, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Tarefa } from './components/Tarefa';
import { useFormik } from 'formik';
import { useState } from 'react';
import uuid4 from "uuid4";




function App() {
  const [listaTarefa, setListaTarefa] = useState([])


  const excluirTarefa = (id) => {
    const arrayAtualizado = listaTarefa.filter(item => item.id !== id);
    setListaTarefa(arrayAtualizado);
  }

  const resolverTarefa = (id, resolvida) => {
    const arrayAtualizado = listaTarefa.map(item => item.id === id ? { ...item, resolvida: !resolvida } : item);
    setListaTarefa(arrayAtualizado);
  }



  const formik = useFormik({
    initialValues: {
      tituloTarefa: ""
    },

    onSubmit: values => {
      setListaTarefa([...listaTarefa, {
        id: uuid4(),
        mensagem: values.tituloTarefa,
        resolvida: false
      }])

    },
    validate: values => {
      const erros = {}
      if (values.tituloTarefa.length === 0) {
        erros.tituloTarefa = "Campo obrigatório!"
      }
      if(values.tituloTarefa.length >= 45){
        erros.tituloTarefa = "Máximo de caracteres: 45"
      }
      return erros;
    }
  });

  return (

    <>

      <div className='fundoAzul' >
        <div className='quadradoBranco'>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="tituloTarefa"
              name="tituloTarefa"
              label="Título da tarefa"
              variant="outlined"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.tituloTarefa}
              error={!!formik.errors.tituloTarefa}
              helperText={formik.errors.tituloTarefa}
            />
            <Button variant="contained" type="submit">Add</Button>
          </form>
          <div className='listaTarefa'>
            {listaTarefa.map(item => <Tarefa tarefaProp={item} acaoExcluir={excluirTarefa} acaoResolve={resolverTarefa} />)}
          </div>
        </div>

      </div >
    </>




  )
}

export default App
