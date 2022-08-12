import { useState, useEffect } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/times', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTimes(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const [colaboradores, setColaboradores] = useState([]);

  const novoColabAdd = (colaborador) => {
    setColaboradores([
      ...colaboradores,
      colaborador
    ]);
  }

  const handleColabDelet = (colaboradorMatricula) => {
    const colabDelet = colaboradores.filter(colaborador => colaborador.matricula !== colaboradorMatricula )
    setColaboradores(colabDelet);
  }


  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColabAdd(colaborador) }/>
      {times.map(time =>
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          delet = {handleColabDelet}
        />
      )}
      <Rodape />
    </div>
  );
}
export default App;
