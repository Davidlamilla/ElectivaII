/* Importar los modulos */

import { Formulario } from "./assets/Componets/Formulario"
import Header from "./assets/Componets/Header"
import { ListaPacientes } from "./assets/Componets/ListaPacientes"

function App() {

  return (
   
    <div className="container mx-auto mt-20">

    <Header/>
    <div className="mt-12 md:flex">
    <Formulario/>
    <ListaPacientes/>
    </div>
    </div>
  )
}

export default App
