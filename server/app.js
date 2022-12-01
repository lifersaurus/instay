import express from 'express'
import postsRoutes from './routes/posts.routes.js'
const app=express ()
//middleweares
app.use(express.json())
app.use(postsRoutes)

export default app