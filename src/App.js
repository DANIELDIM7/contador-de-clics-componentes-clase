
import React from 'react';
import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import freeCodecampLogo from './img/freeCodeCamp_logo.svg.png'


// Adaptaremos App.js a clases

class App extends React.Component{
  constructor(){ 
    super(); // Esto se hace para heredar las funcionalidades de Reac.Component
    this.state = {
      numClics:0
    };
    this.manejarClic=this.manejarClic.bind(this); //asocia el valor actual de this para que se pueda usar en otros con su contexto original 
    this.reiniciarContador=this.reiniciarContador.bind(this);
  }
  manejarClic(){
    this.setState(({ numClics })=>({ numClics:numClics +1})); //permite actualizar de estado el objeto
  }
  reiniciarContador(){
    this.setState({numClics:0});
  }

  render(){
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
        
        <Contador numClics={this.state.numClics} //Pasamos el state de clics como props de la función numClics
        />
  
        <Boton
        texto='Clic'
        esBotonDeClick={true}
        manejarClick={this.manejarClic}
        />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={this.reiniciarContador}
        
        />
                                                                                                                                                                              
        </div>
        
      </div>
    );
  }
}


// function App() {
//   const [numClics,setNumClics] = useState(0);


//   // definamos una función en nuestra app principal
//   const manejarClic = () => {
//     // Actualizamos el estado(NÚMERO DE CLICKS)
//     setNumClics(numClics +1);
//   };
//   const reiniciarContador = () => {
//     setNumClics(0);
//   };
//   return (
//     <div className='App'>
//       <div className='freecodecamp-logo-contenedor'>
//         <img
//           className='freecodecamp-logo'
//           src = {freeCodecampLogo}
//           alt='Logo de freecodeCamp'
//            />
//       </div>
//       <div className='contenedor-principal'>
      
//       <Contador numClics={numClics} //Pasamos el state de clics como props de la función numClics
//       />

//       <Boton
//       texto='Clic'
//       esBotonDeClick={true}
//       manejarClick={manejarClic}
//       />
//       <Boton
//       texto='Reiniciar'
//       esBotonDeClick={false}
//       manejarClick={reiniciarContador}
      
//       />
                                                                                                                                                                            
//       </div>
      
//     </div>
//   );
// }

export default App;
