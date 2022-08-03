import './Rodape.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Rodape = () => {
    return (
    
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href='https://github.com/alveskt' target="_blank" rel="noopener noreferrer">
                            <BsGithub size={32}/>
                        </a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/in/gustavo-silveira-0608a0229' target="_blank" rel="noopener noreferrer">
                            <BsLinkedin size={32}/>
                        </a>
                    </li>
                </ul>
            </section>
            <section className='logo'>
                <img src="/img/logo.png" alt="" />
            </section>
            <section>
                <div>
                    <h3>Desenvolvido por Gustavo Alves.</h3>
                    <p>Através do curso: React: Desenvolvendo com JavaScript. Criado pela Alura</p>
                </div>
            </section>
        </footer>
    )
}
export default Rodape