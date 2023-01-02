import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../ui"
import { LoginPages } from "../auth"
import { DcPages,MarvelPages } from '../heroes'



export const AppRouter = () => {
  return (
    <>

        <Navbar/>

        <Routes>
            <Route path='/marvel' element={<MarvelPages/>}/>
            <Route path='dc' element={<DcPages/>}/>
            <Route path='login' element={<LoginPages/>}/>
            <Route path='/' element={<Navigate to='/marvel'/>}/>
        </Routes>
    </>
  )
}
