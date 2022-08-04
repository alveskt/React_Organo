import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const corPrimaria = props.corPrimaria;
    const corSecundaria = props.corSecundaria;
    
    return (
       
        (props.colaboradores.length > 0) ?
            <section className='time' style={{ backgroundColor: corSecundaria }}>
                <h3 style={{ borderColor: corPrimaria }}> {props.nome} </h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        key={colaborador.nome}
                        corPrim={corPrimaria}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        matricula={colaborador.matricula} 
                        img={colaborador.imagem} 
                        corSec ={corPrimaria}
                        delet = {props.delet}
                    />)}
                </div>
            </section>
            : ''
    )
}

export default Time;