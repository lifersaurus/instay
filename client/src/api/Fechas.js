import axios from 'axios'

export const getFechasRequests=async()=> await axios.get('/fechas')

export const createFechaRequest= async(fecha)=> await axios.post('/fechas', fecha)

export const deleteFechaRequest=async id=> await axios.delete('/fechas/'+id)