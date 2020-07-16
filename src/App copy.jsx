import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { loadProfiles, loadCourses } from './utils/load'
import GlobalStyle from './styles/global'







function App() {

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {

      loadProfiles()
      loadCourses()
    }

  }, [token])
  /** */
  return (
    <>
      {token ?
        <Router>
          <Navbar />

          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/home' component={Home} />

            <Route path='/meucurso' component={MyCourse} />

            <Route exact={true} path='/cursos' component={Course} />
            <Route path='/cursos/editar/:id' component={CourseForm} />
            <Route path='/cursos/cadastrar' component={CourseForm} />

            <Route exact={true} path='/usuarios' component={User} />
            <Route path='/usuarios/editar/:id' component={UserForm} />
            <Route path='/usuarios/cadastrar' component={UserForm} />



            <Redirect path='*' to='/' />

          </Switch>

          <Footer />
        </Router>
        :
        <Router>
          <Route exact={true} path='/' component={Login} />
          <Redirect path='*' to='/' />
        </Router>
      }
      <GlobalStyle />
    </>
  );
}

export default App
