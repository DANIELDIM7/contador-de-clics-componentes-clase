
import './App.css';
import Boton from './componentes/Boton';
import freeCodecampLogo from './img/freeCodeCamp_logo.svg.png'

function App() {
  // definamos una función en nuestra app principal
  const manejarClic = () => {
    console.log('Clic');
  }
  const reiniciarContador = () => {
    console.log('Reiniciar');
  }
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
