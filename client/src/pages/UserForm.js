import {Formik, Form, Field, ErrorMessage} from 'formik'
import {useUsers} from '../context/userContext'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'

import toast from 'react-hot-toast'




export function UserForm() {


  const {users}=useUsers()
  const {deleteUser}=useUsers()
  const {createUser}=useUsers()
  const navigate=useNavigate()

  const handleDELETE=(id)=>{
    toast((h)=>(
        <div>
            <p>Estas seguro de que quieres eliminarlo?<strong>{id}</strong></p>
            <div>ㅤㅤ
                <button  className="btn btn-danger"onClick={()=>{deleteUser(id)
                    toast.dismiss(h.id)
                    }}>Eliminar</button>ㅤㅤㅤㅤ
                <button className="btn btn-outline-dark" onClick={()=> toast.dismiss(h.id)}>Cancelar</button>
            </div>
        </div>

    ))}
  

  return (
    
        <Formik
        initialValues={{
          username:'',
          identif:'',
          direccionenv:'',
          horario:'',
          ciudadenv:''
        }}
        validationSchema={Yup.object({
          
          username: Yup.string().required("nombre requerido"),
          identif:Yup.string().required("identifiacion requerida").max(10),
          direccionenv:Yup.string().required("direccion requerida"),
          ciudadenv:Yup.string().required("ciudad requerida"),
          horario:Yup.string().required("Horario requerido")
        })}
        onSubmit={async(values, actions)=>{
          
          await createUser(values)
          navigate ('/user')
      }}
        >
     
          {({ handleSubmit})=>(
             <div>
        <Form onSubmit={handleSubmit}>
        
          <h2 className='text-center'>Crear nuevo usuario</h2>

          <p className='text-center  text-black' >Dia y hora de atención para recogida y envio:</p>
            <Field name='horario' className="form-control border border-primary mx-auto"style={{width: 310}} placeholder='14/12/22 7am-9am'/>
            <ErrorMessage component='p'  className="mx-auto alert alert-primary"style={{width: 280}} name='horario'/>
          
          <p className='text-center  text-black' >Nombre completo de quien envia</p>
          <Field  className="form-control border border-primary mx-auto "style={{width: 310}}name='username' placeholder='Alex Javier Ramos Silva'/>
          <ErrorMessage component='p' className="mx-auto alert alert-danger"style={{width: 280}} name='username'/>

          <p className='text-center text-black' >Identificacion de quien envia</p>
            <Field  className="form-control border border-primary mx-auto"style={{width: 310}}name='identif' placeholder='Identificacion de quien envia'/>
            <ErrorMessage component='p'className="mx-auto alert alert-primary"style={{width: 280}} name='identif'/>

            <p className='text-center text-black' >Direccion de quien envia</p>
            <Field  className="form-control border border-primary mx-auto" style={{width: 310}} name='direccionenv' placeholder='carrera 23#13-1'/>
            <ErrorMessage component='p'className="mx-auto alert alert-primary" style={{width: 280}}name='direccionenv'/>

            <p className='text-center text-black' >ciudad de quien envia</p>
            <Field  className="form-control border border-primary mx-auto"style={{width: 310}}name='ciudadenv' placeholder='Bogotá'/>
            <ErrorMessage component='p'className="mx-auto alert alert-primary"style={{width: 280}} name='ciudadenv'/>
            
            <br/>
            
            <p className='text-center'><button type="submit" className="mx-auto btn btn-primary"
            onClick={()=> toast.success('Usuario guardado')}
            >Guardar usuario</button>
            </p>
            <div  className="rounded-pill bg-light text-dark text-justify text-center">
              {users.map(user=>(
              <div key={user._id}>
                  {user.username}ㅤㅤ

                  {user.identif}ㅤㅤ

                  {user.direccionenv}ㅤㅤ

                  {user.ciudadenv}ㅤㅤ<button type="button" className="center-block btn btn-danger center"
                onClick={()=>handleDELETE(user._id)}
                >
                    Eliminar</button>
                    <br/>
                    <br/>
            </div>
          
        
         ))}
         </div>
         <br/>
         <br/>
         <br/>
        
        </Form>
        </div>
          )}
      </Formik>
      
)
}

