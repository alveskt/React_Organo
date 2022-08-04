import './CampoTexto.css'

const CampoTexto = (props) => {

    const digita = (e)=>{
       props.valorAlterado(e.target.value)
    }
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input type="text"
                value={props.valor} 
                onChange={digita} 
                required={props.obrigatorio} 
                placeholder={`${props.placeholder}...`}
            />
        </div>
    )
};
export default CampoTexto;