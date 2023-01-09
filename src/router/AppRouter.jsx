import { Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth"
import { HeroesRoutes } from '../heroes'
import { PrivateRoute,PublicRoute } from "./"




export const AppRouter = () => {
  return (
    <>

        <Routes>
            
            <Route path='login/*' element={
              <PublicRoute>
                {/* <LoginPages/> */}
                <Routes>
                  <Route path='/*' element={<LoginPages/>}/>
                </Routes>
              </PublicRoute>
            }/>
            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/>

            {/* <Route path='login' element={<LoginPages/>}/>
            <Route path='/*' element={<HeroesRoutes/>}/> */}
            
            
        </Routes>
    </>
  )
}
