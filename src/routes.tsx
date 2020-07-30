import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './components/Home'
import Login from './pages/Login'

import Course from './components/Course'
import CourseForm from './components/CourseForm';

import MyCourse from './components/MyCourse'

import User from './pages/User'
import UserForm from './pages/User/Form'

const Routes = () => {

  const token = localStorage.getItem('token')

  // console.log(token)

  if(!token){
    return(
      <BrowserRouter>
        <Route path='/' component={Login} />
        <Redirect path='*' to='/' />
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Navbar />
      {/* <Route exact={true} path='/' component={Home} />
      <Route path='/home' component={Home} />

      <Route path='/meucurso' component={MyCourse} />

      <Route exact={true} path='/cursos' component={Course} />
      <Route path='/cursos/editar/:id' component={CourseForm} />
      <Route path='/cursos/cadastrar' component={CourseForm} />

      <Route exact={true} path='/usuarios' component={User} />
      <Route path='/usuarios/editar/:id' component={UserForm} />
      <Route path='/usuarios/cadastrar' component={UserForm} /> */}

      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default Routes;