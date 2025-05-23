import './App.css'
import { Button, Checkbox, InputAdornment, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Tarefa } from './components/Tarefa';



function App() {
  const listaTarefas = [{ mensagem: "Teste mensagem 1" }, { mensagem: "Teste mensagem 2" }, { mensagem: "Teste mensagem 3" }]
  return (


    <>
      {/* <TextField id="outlined-basic" label="Título da tarefa" variant="outlined" />
      <Button variant="contained">Adicionar tarefa</Button>
      <Checkbox />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Apagar tarefa
      </Button> */}

      <div className='fundoAzul'>
        <div className='quadradoBranco'>
          <form action="">
            <TextField id="outlined-basic" label="Título da tarefa" variant="outlined" size="small" />
            <Button variant="contained">Add</Button>
          </form>
          <div className='listaTarefa'>
            {listaTarefas.map(item => <Tarefa mensagem={item.mensagem} />)}
          </div>
        </div>

      </div>
    </>




  )
}

export default App
