import mongoose from 'mongoose'

const fechaSchema =new mongoose.Schema({

    nombre:{type: String ,
        require:true,
        trim:true
    },
    dimensiones: {type: String ,
        require:true,
        trim:true
    },
    peso: {type: String ,
        require:true,
        trim:true
    },
    identi: {type: String ,
        require:true,
        trim:true
    },
    usaurio: {type: String ,
        require:true,
        trim:true
    },
    direccion: {type: String ,
        require:true,
        trim:true
    },
    ciudad: {type: String ,
        require:true,
        trim:true
    }


    
   
},
{
    timestamps: true,
    versionKey: false,
  }

);

export default mongoose.model('Fechas', fechaSchema)