import './Colaborador.css'

const Colaborador = ({nome, img, cargo, corNome, corDeFundo}) => {

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={img} alt='Imagem de Perfil'/>
            </div>
            <div className='rodape'>
                <h4 style={{ color: corNome}}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>  
        </div>
    )
}
export default Colaborador;