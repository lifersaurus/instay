import {config} from 'dotenv'

config();
export const MONGODB_URI= process.env.MONGODB_URI || 'mongodb+srv://instayauser:dp6n6TXfS8xCb3V@api-rest.1hclbhk.mongodb.net/?retryWrites=true&w=majority'
export const PORT= process.env.PORT||5000