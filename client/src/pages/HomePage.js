import {useFechas} from "../context/fechasContext"
import { FechasCard } from '../components/FechasCard'


export function HomePage() {
  
const {fechas}=useFechas()

if (fechas.length ===0) 
return(
 
    <div >
      
      <h1 className="text-center font-weight-bold"> No hay fechas </h1></div>
  
)
  return (
    
    
           
    <div  className="row align-items-center row justify-content-evenly">
      {fechas.map(fecha=>(
        <FechasCard fecha={fecha} key={fecha}/>
      
        
        
         ))}
     </div>
        
    
  )
}

