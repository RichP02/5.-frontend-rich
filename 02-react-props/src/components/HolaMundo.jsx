import './HolaMundo.css'

const HolaMundo = ({nombre,apellido}) => {
    return (
        <h2 className="saludo" style={{fontSize:'20px', border:'solid black'}}>Hola {nombre} {apellido}</h2>
    )
}
export default HolaMundo

// const HolaMundo = (props) => {
//     return (
//         <h2>Hola {props.nombre} {props.apellido}</h2>
//     )
// }
// export default HolaMundo


// Los componentes siempre inician en mayuscula. Tanto el nombre de archivo como cuando escriben la función.
