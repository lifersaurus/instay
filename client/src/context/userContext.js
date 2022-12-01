import { useState, createContext, useContext, useEffect } from "react"

import {getUsersRequests, createUserRequest, deleteUserRequest} from '../api/Users'


const usersContext=createContext()
export const useUsers = ()=>{
    const contexto=useContext(usersContext)
    return contexto

}
export const UsersProvider = ({ children }) => {
 
  const [users, setUsers]=useState([])
  
  const getUsers= async ()=>{
    const res=await getUsersRequests()
    setUsers(res.data)
  }
  const deleteUser=async id=>{
    const res=await deleteUserRequest(id)
    if (res.status===204){
    setUsers (users.filter(user=>user._id !==id))
    }
  }
  const createUser=async(user)=>{
   
    const res=await createUserRequest(user)
      setUsers([...users, res.data])
  }
  useEffect(() => {
    getUsers()
    
    }, [])

  return (
    <usersContext.Provider value={{
        users,
        getUsers,
        createUser,
        deleteUser
        
    }}>
	{children}
    </usersContext.Provider>
  )
}