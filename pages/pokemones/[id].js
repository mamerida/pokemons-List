import Image from "next/image"
import Link from "next/link"
const Pokemon = ({data}) =>{
    console.log(data)
    return(
        <div>
            <h1>{data.name} #{data.id}</h1>
            <Image src={data.sprites.front_default} width={400} height={400}/>
            <Link href="/">Volver a la pokedek</Link>
        </div>
    )
}

export default Pokemon

//para que la pagina se renderize en el lado del servidor lo realizamos con esta funcion pero cuando navego por las opciones. Al 
//estar definido getStaticProps renderiza del lado del cliente
export const getStaticsProps = async ({params}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()
    return{
        props:{data}
    }

}
// //para que la pagina se renderize en el lado del servidor lo realizamos con esta funcion pero cuando navego por las opciones. Al 
// //estar definido getStaticProps renderiza del lado del cliente
// export const getServerSideProps = async ({params}) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//     const data = await response.json()
//     return{
//         props:{data}
//     }

// }