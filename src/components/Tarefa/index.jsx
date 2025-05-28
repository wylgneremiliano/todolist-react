
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './style.css'

const Tarefa = (props) => {

    return <div className='caixa'>
        <p>{props.tarefaProp.mensagem}</p>
        <div className='botaoAzul' onClick={() => props.acaoExcluir(props.tarefaProp.id)}>
            <DeleteOutlineIcon htmlColor='#fff' />
        </div>
    </div>
}


export { Tarefa }