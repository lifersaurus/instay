
import Users from '../models/Users.js'

export const getUsers=async(req, res)=>{
    try {
        const users= await Users.find()
        res.send(users)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }
}
export const createUser=async(req, res)=>{
    try {
        const {username, identif, direccionenv, ciudadenv,horario }=req.body
        const newUser=new Users({username, identif, direccionenv, ciudadenv, horario })
        await newUser.save()
        return res.json(newUser)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const deleteUser=async(req, res)=> {
    try {
        const userRemove=await Users.findByIdAndDelete(req.params.id)
        if (! userRemove) return res.sendStatus(404)
        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}



export const updateUser=async(req, res)=>{
    try {
        const updateuser= await Users.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.send(updateuser)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getUser=async (req, res)=>{
    try {
        const { id } = req.params;
        const userFound=await Users.findById(req.params.id)
        if(!userFound) return res.sendStatus(404)
        return res.json(userFound)

    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
}