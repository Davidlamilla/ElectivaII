/* Importar los modulos */

import { Formulario } from "./assets/Componets/Formulario"
import Header from "./assets/Componets/Header"
import { ListaPacientes } from "./assets/Componets/ListaPacientes"

/* Funcion creadora de la aplicacion */
function App() {

  return (
   
    /* etiqueta padre y el body de la pagina */
    <div>

    <Header/>
    <Formulario/>
    <ListaPacientes/>

    </div>
  )
}
/* Exportar para importar el modulo a otras partes de body */
export default App
