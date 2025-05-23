import './App.css'
import { Button, Checkbox, InputAdornment, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Tarefa } from './components/Tarefa';



function App() {

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
            <Button variant="contained">Adicionar tarefa</Button>
          </form>
          <div className='listaTarefa'>
            <Tarefa />

          </div>
        </div>

      </div>
    </>




  )
}

export default App
