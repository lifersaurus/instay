import { Router } from "express";
import {getFechas, createFecha, updateFecha, deleteFecha, getFecha} from '../controllers/fecha.controllers.js'
import {getUsers, createUser, updateUser, deleteUser, getUser} from '../controllers/user.controllers.js'
const router= Router()



router.get ('/fechas', getFechas)

router.post ('/fechas', createFecha)

router.put ('/fechas/:id', updateFecha )

router.delete ('/fechas/:id', deleteFecha )

router.get ('/fechas/:id', getFecha)

router.get ('/user', getUsers)

router.post ('/user', createUser)

router.delete ('/user/:id', deleteUser)

router.put ('/user/:id', updateUser)

router.get ('/user/:id', getUser)


export default router