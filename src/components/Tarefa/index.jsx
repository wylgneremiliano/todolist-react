
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './style.css'

const Tarefa = (props) => {
    return <div className='caixa'>
        <p>{props.mensagem}</p>
        <div className='botaoAzul'>
            <DeleteOutlineIcon htmlColor='#fff'/>
        </div>
    </div>
}


export { Tarefa }