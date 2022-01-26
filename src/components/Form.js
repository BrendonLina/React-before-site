function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        alert('Cadastrado !')
    }

    return(
        <div>
            <h1>Cadastre-se</h1>
                <form onSubmit={cadastrarUsuario}>
                    <div>
                        <input type="text" placeholder="Seu nome..." />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
        </div>
    )
}

export default Form