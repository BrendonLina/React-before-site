function Evento({numero}){
    
    function meuEvento(){
        alert(`rodando ${numero}`)
    }
    
    return(

        <div>
            <p>Click para disparar um evento:</p>
            <button onClick={meuEvento}>Disparar</button>
        </div>
    )
}

export default Evento