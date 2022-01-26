import Item from './Item';
function List(){
    return(
        // trabalhando com reactfragment se usa <> </> sem precisar de uma <div> pai
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Bmw" ano_lancamento={2014}/>
                <Item marca="Mercedes" ano_lancamento={2013}/>
                <Item marca="Audi" ano_lancamento={2012}/>
                {/* <Item /> */}
            </ul>
        </>
    )
}

export default List