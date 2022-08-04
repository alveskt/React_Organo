import './Colaborador.css'
import {CgClose} from 'react-icons/cg'


const Colaborador = ({nome, img, cargo, matricula, corSec, corPrim, delet}) => {

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corPrim}}>
                <img src={img} alt='Imagem de Perfil'/>
                <button className='botao-excluir' onClick={() => delet(matricula)} style={ {color: corSec}}>
                    <CgClose />
                </button>
            </div>
            <div className='rodape'>
                <h4 style={{ color: corSec}}>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{matricula}</h5>
            </div>  
        </div>
    )
}
export default Colaborador;