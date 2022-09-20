
import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import freeCodecampLogo from './img/freeCodeCamp_logo.svg.png'
import { useState} from 'react'; //Este es un HOOKS que vamos a usar

function App() {
  const [numClics,setNumClics] = useState(0);


  // definamos una función en nuestra app principal
  const manejarClic = () => {
    // Actualizamos el estado(NÚMERO DE CLICKS)
    setNumClics(numClics +1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src = {freeCodecampLogo}
          alt='Logo de freecodeCamp'
           />
      </div>
      <div className='contenedor-principal'>
      
      <Contador numClics={numClics} //Pasamos el state de clics como props de la función numClics
      />

      <Boton
      texto='Clic'
      esBotonDeClick={true}
      manejarClick={manejarClic}
      />
      <Boton
      texto='Reiniciar'
      esBotonDeClick={false}
      manejarClick={reiniciarContador}
      
      />
                                                                                                                                                                            
      </div>
      
    </div>
  );
}

export default App;
