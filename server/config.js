import {config} from 'dotenv'

config();
export const MONGODB_URI= process.env.MONGODB_URI || 'mongodb://mongo:fZVlyaUsIKb3DfeM0B0p@containers-us-west-130.railway.app:7303'
export const PORT= process.env.PORT||5000