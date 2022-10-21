import React from "react";
import '../hojas-de-estilos/Contador.css'

class Contador extends React.Component{
    render(){
        return(
            <div className="contador">
                {this.props.numClics}
                {/* adaptamos los props que deben ingresar a la clase */}
    
            </div>
    
        ); 
    }
}


export default Contador;