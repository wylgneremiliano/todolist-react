
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './style.css'
import { Checkbox } from '@mui/material';

const Tarefa = (props) => {

    return <div className='caixa'>
        <Checkbox checked={props.tarefaProp.resolvida} onClick={() => props.acaoResolve(props.tarefaProp.id, props.tarefaProp.resolvida)} />
        <p>{props.tarefaProp.mensagem}</p>
        <div className='botaoAzul' onClick={() => props.acaoExcluir(props.tarefaProp.id)}>
            <DeleteOutlineIcon htmlColor='#fff' />
        </div>

    </div>
}


export { Tarefa }