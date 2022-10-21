import React from   'react';
import '../hojas-de-estilos/Boton.css';

class Boton extends React.Component{
    render(){
        return(
            <button className={ this.props.esBotonDeClick? 'boton-clic' : 'boton-reiniciar'} 
            onClick={this.props.manejarClick}>
                {this.props.texto}
            </button>
        );
    }
}



export default Boton;