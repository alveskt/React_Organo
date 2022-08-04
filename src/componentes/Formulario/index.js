import './Formulario.css'
import  CampoTexto  from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [matricula, setMatricula] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar =(event) =>{
        
        event.preventDefault();
        props.colaboradorCadastrado({
            nome,
            cargo,
            matricula,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setMatricula('')
        setImagem('')
        setTime('')   
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados pra criar o seu card</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    valorAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    valorAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label='Matricula' 
                placeholder='Digite sua matrícula'
                valor={matricula}
                valorAlterado={valor => setMatricula(valor)}
                />
                <CampoTexto 
                    obrigatorio={false} 
                    label='Imagem' 
                    placeholder='Escolha sua foto'
                    valor={imagem}
                    valorAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.times}
                    valor={time}
                    valorAlterado={valor => setTime(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
export	default Formulario;