import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Home from './pages/home/home';
import { BrowserRouter as Router , Routes ,Route, useNavigate, useRouteError, useLocation } from 'react-router-dom';
import PageNotFound from "./pages/home/page-not-found"
import Header from './container/header/header';


const App = () => {


  return (
    <>
    <Header />
    
    <Router>  
      <Routes>
        <Route  path='/home' element={<Home />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </Router>

    


     





      




    </>
  )
}

export default App
