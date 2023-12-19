import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import AdminLogin from '../components/admin/auth/login'

export default function AdminRoutes(){
    return(
        <>
        <BrowserRouter>
           <Routes>
             <Route path='/admin/login' element={<AdminLogin/>}  />
           </Routes>
        </BrowserRouter>
        </>
    )
}