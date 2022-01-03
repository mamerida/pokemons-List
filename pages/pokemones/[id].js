const Pokemon = ({data}) =>{
    console.log(data)
    return(
        <p>lala</p>
    )
}

export default Pokemon

//para que la pagina se renderize en el lado del servidor lo realizamos con esta funcion pero cuando navego por las opciones. Al 
//estar definido getStaticProps renderiza del lado del cliente
export const getServerSideProps = async ({params}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()
    return{
        props:{data}
    }

}