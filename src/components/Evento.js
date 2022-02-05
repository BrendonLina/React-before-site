import Button from "./evento/Button"

function Evento({numero}){
    
    function meuEvento(){
        alert(`rodando ${numero}`)
    }

    function segundoEvento(){
        alert("Segundo evento !")
    }
    
    return(

        <div>
            <p>Click para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
            {/* <button onClick={meuEvento}>Disparar</button> */}
        </div>
    )
}

export default Evento