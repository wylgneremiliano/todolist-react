import './App.css'
import { Button, Checkbox, InputAdornment, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Tarefa } from './components/Tarefa';
import { useFormik } from 'formik';
import { useState } from 'react';
import uuid4 from "uuid4";




function App() {
  const [listaTarefa, setListaTarefa] = useState([])
  console.log(JSON.stringify(listaTarefa, null, 2));


  const excluirTarefa = (id) => {
    const arrayAtualizado = listaTarefa.filter(item => item.id !== id);
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
      return erros;
    }
  });

  console.log(formik.errors.tituloTarefa)
  console.log(!!formik.errors.tituloTarefa)
  return (

    <>
      {/* <TextField id="outlined-basic" label="Título da tarefa" variant="outlined" />
      <Button variant="contained">Adicionar tarefa</Button>
      <Checkbox />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Apagar tarefa
      </Button> */}

      < div className='fundoAzul' >
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
            {listaTarefa.map(item => <Tarefa tarefaProp={item} acaoExcluir={excluirTarefa} />)}
          </div>
        </div>

      </div >
    </>




  )
}

export default App
