import Index from '../pages/index';
//queremos renderizar el componente de manera virtual
import {render,screen} from '@testing-library/react'

describe('Component', () =>{
    it("se renderiza", ()=>{
        //para obtener elementos que solo hemos renderizado y no todo el 
        //componente 
        const { getByTestId} = render(
            //para renderizado dinamico debo indicar el elemento
            <Index pokemones={[{name: 'Chanchito feliz' , url :"/pokemon/detalle/1"}]}/>
        )
        //con el texto
        const paragraph2 = screen.getByText("Pokemons")
        //con el id
        //para poder asegurarme de que existe al componente debo pasarle  
        //data-testid al componente 
        const paragraph = screen.getByTestId("titulo")
        expect(paragraph).toBeInTheDocument()

        const chanchito = screen.getByText("Chanchito feliz")
        console.log(chanchito)
        expect(chanchito).toBeInTheDocument()

    })
})