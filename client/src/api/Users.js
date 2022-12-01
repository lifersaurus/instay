import axios from 'axios'

export const getUsersRequests=async()=> await axios.get('/user')

export const createUserRequest= async(user)=> await axios.post('/user', user)

export const deleteUserRequest=async id=> await axios.delete('/user/'+id)