import Users from '../models/Users.js'
import Fechas from '../models/Fechas.js'
const {content, important=false, userId}=request.body

const user=await Users.findById(userId)

export const getFechas= async (req, res)=>{
    try{
        const fechas= await Fechas.find()
        return res.json(fechas)

    }catch(error){
        console.error(error.message)
        return res.status(500).json({message: error.message})

    }
}
export const createFecha=async(req, res)=>{
    try {
        const {nombre, dimensiones, peso, identi, direccion,author, ciudad,
            
         }=req.body;
        const newFecha=new Fechas({nombre, dimensiones, author, peso, identi, direccion, ciudad,
            important,
            user: user._id
        })
        await newFecha.save();
        return res.json(newFecha);

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    

}

export const deleteFecha=async (req, res)=>{
    try {
        const fechaRemove=await Fechas.findByIdAndDelete(req.params.id)
        if (! fechaRemove) return res.sendStatus(404)
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const updateFecha= async (req, res)=>{
    try {
        const updatefecha= await Fechas.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.send(updatefecha)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getFecha=async (req, res)=>{
    try {
        const { id } = req.params;
        const fechaFound=await Fechas.findById(req.params.id)
        if(!fechaFound) return res.sendStatus(404)
        return res.json(fechaFound)

    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
}
