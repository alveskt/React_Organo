import './Colaborador.css'
import { useState } from 'react';
import perfil from './perfil.png'
import {CgClose} from 'react-icons/cg'


const Colaborador = ({nome, img, cargo, matricula, corSec, corPrim, delet}) => {
    
    const [newImage, setNewImage] = useState(true);

    const verificaImagem = (img) => {
        let imagem = new Image();
        imagem.src = img;
        imagem.onerror = () => {
            setNewImage(false);
        }    
    }
    verificaImagem(img);

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corPrim}}>
                <div className='botao-excluir__container'>
                    <button className='botao-excluir' onClick={() => delet(matricula)} style={ {backgroundColor: corSec}}>
                        <CgClose />
                    </button>
                </div>
            </div>
            <div className='img-perfil' style={ {backgroundColor: corPrim}}>   
                <img src={newImage ? img : perfil} alt='Imagem de Perfil'/>
            </div>
            <div className='rodape'>
                <h4 style={{ color: corPrim}}>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{matricula}</h5>  
            </div>  
        </div>
    )
}
export default Colaborador;