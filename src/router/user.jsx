import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import HomePage from '../pages/main'

export default function UserRoutes(){
    return(
        <>
        <BrowserRouter>
           <Routes>
             <Route path='/' element={<HomePage/>}  />
           </Routes>
        </BrowserRouter>
        </>
    )
}