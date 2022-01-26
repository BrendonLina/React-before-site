import PropTypes from 'prop-types';

function Item({marca, ano_lancamento}){
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lacamento: PropTypes.number.isRequired
}

//forma passada para caso se esqueça de passar o props
Item.defaultProps = {
    marca: "Cade a seta ? ",
    ano_lancamento: 0
}

export default Item