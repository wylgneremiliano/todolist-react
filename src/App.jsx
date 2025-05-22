import './App.css'
import { Button, Checkbox, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';



function App() {

  return (


    <>
      <TextField id="outlined-basic" label="Título da tarefa" variant="outlined" />
      <Button variant="contained">Adicionar tarefa</Button>
      <Checkbox />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Apagar tarefa
      </Button>
    </>




  )
}

export default App
