// import Document from "next/document";
// //ServerStyleSheet camputurar estilos al renderizar las paginas tanto estatico como al server
// import { ServerStyleSheet } from "styled-components";


// export default class MyDocument extends Document {
//     static async getInitialProps(ctx){
//         //tomar estilos del lado del servidor 
//         const sheet = new ServerStyleSheet()
//         const originalRenderPage = ctx.renderPage

//         try{
//             ctx.renderPage = () =>
//                 originalRenderPage({
//                     enhaceApp: App => props =>
//                         //recolecta estilos de la aplicacion en  la variable de sheet
//                         sheet.collectStyles(<App {...props}/>),
//                 })
//             const initialProps = await Document.getInitialProps(ctx)
            
//             return {
//                 ...initialProps,
//                 styles:(
//                     <>
//                     {initialProps.styles}
//                     {sheet.getStyleElement()}
//                     </>
//                 )
//             }

//         } finally{
//             sheet.seal()

//         }

//     }
// }

import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}