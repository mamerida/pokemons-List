import Link from "next/link"

const Pokemon = ({pokemon}) =>{
  const id =pokemon.url.split("/").filter(x=>x).pop()

  return(
    <li><Link href={`/pokemones/${id}`}>{pokemon.name}</Link></li>
  )
}

export default function Pokemons({pokemones}) {

  return (
    <div>
      <p>Pokemons</p>
      <ul>

        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key ={pokemon.name} />)}
      </ul>
    </div>
  )
}

//renderizado estatico mediante la propieadad getStaticProps hace que toda la aplicacion se genere antes de ingresar a la misma 
//aumenta la velocidad al renderizar todo antes para evitar pantallas de cargar esto generando una pagina html directamente sin interpretar
//con static site generation 

export const getStaticProps = async () =>{
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return{
    props: { pokemones : data.results}
  }

}