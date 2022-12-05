import toast from 'react-hot-toast'
import {useFechas} from '../context/fechasContext'
import {useUsers} from '../context/userContext'
export function FechasCard({fecha, user}){
    const {users}=useUsers()

    const{deleteFecha}=useFechas()
    const handleDELETE=(id)=>{
        toast((t)=>(
            <div>
                <p>Estas seguro de que quieres eliminarlo?<strong>{id}</strong></p>
                <div>ㅤㅤ
                    <button  className="btn btn-danger" onClick={()=>{deleteFecha(id)
                    toast.dismiss(t.id)
                    }}>Eliminar</button>ㅤㅤ
                    <button className="btn btn-outline-dark" onClick={()=> toast.dismiss(t.id)}>Cancelar</button>
                </div>
            </div>

        ))
    }
                return(
                    
                <div className="card border-primary mb-3 " style={{width: 300}}>
                <div className="card-header">Codigo de entrega: {fecha._id}</div>
                <form>

<div class="form-group">
  <label for="exampleFormControlSelect1">Estado del envio</label>
  <select class="form-control" id="exampleFormControlSelect1">
    <option>Guardado</option>
    <option>Enviado</option>

  </select>
</div>

</form>
                
               
                <div class="card-body text-primary">
                <h5 className="card-title">DATOS DE QUIEN ENVIA</h5>
                <div  >
                if 
                {users.map(user=>(
              <div key={user._id}>
                 <p className="card-text "> Nombre: {user.username}</p>
                <p className="card-text"> Identificacion: {user.identif}</p>
                <p className="card-text"> Direccion: {user.direccionenv}</p>
                  <p className="card-text"> Nombre: {user.ciudadenv}</p>
                  <p className="card-text"> Horario: {user.horario}</p>

            </div>


         ))}
         
                 <p className="card-text "> Nombre: {fecha.author}</p>
                
         </div>
         <h5 className="card-title">DATOS DE QUIEN RECIBE</h5>
                
                <p className="card-text">Nombre: {fecha.nombre}</p>
                <p className="card-text">Identificacion: {fecha.identi}</p>
                <p className="card-text">Peso: {fecha.peso}</p>
                <p className="card-text">Direccion: {fecha.direccion}</p>
                <p className="card-text">Ciudad: {fecha.ciudad}</p>
                

                

                <button type="button" className="btn btn-danger"

                onClick={()=>handleDELETE(fecha._id)}
                >
             
         
                    Eliminar</button>
                    <div class="card-footer text-muted"></div>
            </div>
            </div>
            
            
      
    )
}