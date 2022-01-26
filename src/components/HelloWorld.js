import Frase from './Frase';
function HelloWorld(){
    return(
        <div>
            <Frase />
            <h1>Meu primeiro componente </h1>
            <Frase nome="Brendon"/>
            <Frase nome="Lina"/>
        </div>
    )
}

export default HelloWorld