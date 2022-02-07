function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Ola ${algumNome}, seja bem vindo ! `
    }

    return(
        <div>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </div>
    )
}

export default Saudacao