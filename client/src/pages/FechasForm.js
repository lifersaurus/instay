import {Formik, Form, Field, ErrorMessage} from 'formik'
import {useFechas} from '../context/fechasContext'
import {useUsers} from '../context/userContext'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import React, {compone} from 'react'
export function FechasForm() {

  const {createFecha}=useFechas()
  const navigate=useNavigate()
  
  const {users}=useUsers()

  
  return (
    
    <Formik
      initialValues={{
        nombre:'',
        dimensiones:'',
        peso:'',
        identi:'',
        direccion:'', 
        ciudad:'',
        author:'',
        
      }}
      validationSchema={Yup.object({

          
        nombre: Yup.string().required("nombre requerido"),
       
        identi:Yup.string().required("identifiacion requerido").max(10),
        direccion:Yup.string().required("direccion requerida"),
        ciudad:Yup.string().required("ciudad requerida"),
        peso:Yup.string().required("peso requerido"),
        dimensiones:Yup.string().required("dimensiones requeridas")
      })}
      onSubmit={async(values, actions)=>{
          
        await createFecha(values)
        navigate ('/create')
    }}
      >
       
        {({ handleSubmit})=>(

          
        
        <Form onSubmit={handleSubmit}>
        <h2 className='text-center'>Crear fecha de recogida</h2>
        <div className="form-group ">
        <p name='usuario' className='text-center' >Usuario que va enviar:</p>
        
        <div >
       <p className='text-center'> <select>
        
               {users.map(user=>(
                <option  name='author' key={user._id} >
               {user.username._id}
             
                </option>
               ))
              }
               </select></p>
                </div>
       
          <p className='text-center' >Nombre completo de quien recoge</p>
          <Field name='nombre'className="mx-auto border border-primary form-control text center"style={{width: 245}} placeholder='Alex Javier Ramos Silva'/>
          <ErrorMessage component='p'  className="mx-auto alert alert-primary"style={{width: 245}} name='nombre'/>

          <p className='text-center' >Dimensiones del paquete (cm)</p>
            <Field name='dimensiones' className="mx-auto border border-primary form-control text center"style={{width: 245}}placeholder='40x15x20'/>
            <ErrorMessage component='p'  className="mx-auto alert alert-primary"style={{width: 245}} name='dimensiones'/>

            <p className='text-center' >Peso (kg)</p>
            <Field name='peso' className="mx-auto border border-primary form-control text center"style={{width: 245}}placeholder='20 kg'/>
            <ErrorMessage component='p'  className="mx-auto alert alert-primary"style={{width: 245}} name='peso'/>

          <p className='text-center' >Identificacion de quien envia</p>
            <Field name='identi' className="mx-auto border border-primary form-control text center"style={{width: 245}}placeholder='Identificacion de quien envia'/>
            <ErrorMessage component='p'  className="mx-auto alert alert-primary"style={{width: 245}} name='identi'/>

            <p className='text-center' >Direccion de quien envia</p>
            <Field name='direccion' className="mx-auto border border-primary form-control text center"style={{width: 245}}placeholder='carrera 23#13-1'/>
            <ErrorMessage component='p'  className="mx-auto mx-auto alert alert-primary"style={{width: 245}}name='direccion'/>

            <p className='text-center' >ciudad de quien envia</p>
            <Field name='ciudad' className="border border-primary mx-auto form-control text center"style={{width: 245}} placeholder='Bogot??'/>
            <ErrorMessage component='p'  className="mx-auto alert alert-primary"style={{width: 245}} name='ciudad'/>
           
            <br/>
           
            <p className='text-center'><button type="submit" className="btn btn-primary align-text-bottom"
            onClick={()=> toast.success('Fecha agregada')}
            >Guardar fecha
            </button></p>
            
            
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
            </div>
            
      </Form>
        )}
        
    </Formik>
    
    
 
)
}

