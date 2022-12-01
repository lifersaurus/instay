import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    identif: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    direccionenv: {type: String ,
        require:true,
        trim:true
    },
    ciudadenv: {type: String ,
        require:true,
        trim:true
    },
    horario: {type: String ,
        require:true,
        trim:true
    }

})
export default mongoose.model('Users', userSchema)