import { useState, createContext, useContext, useEffect } from "react"

import {getFechasRequests, createFechaRequest, deleteFechaRequest} from '../api/Fechas'

const fechasContext=createContext()
export const useFechas = ()=>{
    const context=useContext(fechasContext)
    return context

}
export const FechasProvider = ({ children }) => {
 
  const [fechas, setFechas]=useState([])
  
  const getFechas= async ()=>{
    const res=await getFechasRequests()
    setFechas(res.data)
  }
const deleteFecha=async id=>{
  const res=await deleteFechaRequest(id)
  if (res.status===204){
  setFechas (fechas.filter(fecha=>fecha._id !==id))
  }
}
  const createFecha= async(fecha)=>{
   
    const res=await createFechaRequest(fecha)
      setFechas([...fechas, res.data])

  }

  useEffect(() => {
    getFechas()
    
    }, [])

  return (
    <fechasContext.Provider value={{
        fechas,
        getFechas,
        createFecha,
        deleteFecha
    }}>
	{children}
    </fechasContext.Provider>
  )
}