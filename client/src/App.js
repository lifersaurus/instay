import {HomePage, FechasForm, NotFound, UserForm} from './pages'
import Navigation from './pages/Navigation'
import {Routes,Route} from 'react-router-dom'
import {FechasProvider} from './context/fechasContext'
import {UsersProvider} from './context/userContext'
import { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
 
    <UsersProvider>
    <FechasProvider>
        <Navigation/>
        <Routes>
          
            <Route path='/' element={<HomePage/>}/>
            <Route path='/create' element={<FechasForm/>}/>
            <Route path='/user' element={<UserForm/>}/>
            <Route path='*' element={<NotFound/>}/>
        
        </Routes>
        <Toaster/>
    </FechasProvider>
    </UsersProvider>

      
  );
}

export default App;
