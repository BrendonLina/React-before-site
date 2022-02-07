function SeuNome({setarnome}){
    return(
        <div>
            <p>Digite seu nome :</p>
            <input type="text" placeholder="Seu nome" onChange={(e) => setarnome(e.target.value)} />
        </div>
    )
}

export default SeuNome