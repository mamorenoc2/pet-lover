import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../components/pages/Home/Home'
import Pets from '../components/pages/Pets'
import Login from '../components/pages/Login'
import Singup from '../components/pages/SignUp'
import Adoption from '../components/pages/Adoption'
import PetsDescription from '../components/pages/PetsDescription'
import PetsList from '../components/pages/PetList'


const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='pets' element={<Pets/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='singup' element={<Singup/>}/>
        <Route path='adoption' element={<Adoption/>}/>
        <Route path='pets/:id' element={<PetsDescription/>}/>
        <Route path='petsList' element={<PetsList/>}/>
    </Routes>
};

export default Routers