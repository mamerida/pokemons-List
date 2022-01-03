import Image from "next/image"
import Link from "next/link"
import { Router, useRouter } from "next/router"
const Pokemon = ({data}) =>{
    const router = useRouter()
    if(router.isFallback){
        return <p>Cargando...</p>
    }
    return(
        <div>
            <h1>{data.name} #{data.id}</h1>
            <Image src={data.sprites.front_default} width={400} height={400}/>
            <Link href="/">Volver a la pokedek</Link>
        </div>
    )
}

export default Pokemon



//lo que me permite esto es crear tantas rutas estaticas como ids tenga en mi aplicacion 
export const getStaticProps = async ({params}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()
    return{
        props:{data}
    }

}

export const getStaticPaths = async () =>{
    const paths = [
        {params : { id : '1'}},
        {params : { id : '2'}},
    ]
    return{
        paths,
        // fallback: blocking espera a que todas las propiedades de Pokemon se generen  y ahi recien devuelve el html
        fallback:true,
    }
}



//para que la pagina se renderize en el lado del servidor lo realizamos con esta funcion pero cuando navego por las opciones. Al 
//estar definido getStaticProps renderiza del lado del cliente
// export const getServerSideProps = async ({params}) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//     const data = await response.json()
//     return{
//         props:{data}
//     }

// }