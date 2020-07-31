
import React, { useState, useEffect, ChangeEvent } from 'react'
// import api from '../../service/api'
// import logout from '../../utils/logout'
// import Loading from '../../components/Loading'
import { Link,  useParams } from 'react-router-dom'
// import AlertModal from '../../components/AlertModal'
// import { FaTrash } from 'react-icons/fa'
import { useFetch } from '../../hooks/useFetch'
import FormField from '../../components/FormField'
// import {loadUsers} from '../utils/load'

// email: "lucas.assuncao@freicarlosvicuna.com.br"
// email_secretary: "lucasdesousa19@hotmail.com"
// email_sup: "lucasdesousa19@hotmail.com"
// id: 1
// name: "Lucas de Sousa Assunção"
// profile: "ADMINISTRADOR" 
interface User {
  id: number,
  name: string,
  email: string,
  email_secretary: string,
  email_sup: string,
  profile: string
}
const User = () => {

  // const [header, setHeader] = useState<string>('')
  const { id } = useParams()
  const { data } = useFetch<User>(`/users/${id}`)

  const [user, setUser] = useState(data as User)

  // const [user, setUser ] = useState(data as User)
  // document.title
  useEffect(() => {
    document.title = id === undefined ? 'Editar Usuário' : 'Cadastrar Usuário'
  }, [id])



  useEffect(() => {
    setUser(data as User)
  }, [data])


  if (!data) {
    // console.log(data)
    return <p>Carregando...</p>
  }
  const handleSubmit = () => {

  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value
    })

  }

  // if (user.name === '') {
  //   // console.log(data)
  //   return <p>Carregando...</p>
  // }

  return (

    <div className="container py-4">
      <h2>Dados do Usuário {}</h2>
      <div className="d-flex justify-content-center">
        <div className="col-md-7 mt-5">
          <form onSubmit={handleSubmit}>
            <FormField
              type='text'
              label='Nome'
              name='name'
              value={user?.name || ''}
              onChange={handleInputChange}
            />
            <FormField
              label='E-mail'
              type='email'
              name='email'
              value={user?.email || ''}
              onChange={handleInputChange}
            />
            <FormField
              label='Senha'
              type='password'
              name='password'
              // value={}
              onChange={handleInputChange}
            />
            <FormField
              label='E-mail Supervisão'
              type='email'
              name='email_sup'
              value={user?.email_sup || ''}
              onChange={handleInputChange}
            />
            <FormField
              label='E-mail Secretaria'
              type='email'
              name='email_secretary'
              value={user?.email_secretary || ''}
              onChange={handleInputChange}
            />

            {/* <div className="form-group">
              <label className="w-100" >Perfil

              <select name="profile" id="profile" className="form-control" value={user?.profile} onChange={handleInputChange}>
                  <option value="0">Selecione uma Opção</option>
                  <option value="ADMINISTRADOR" >ADMINISTRADOR  </option>
                  <option value="ANALISTA" >ANALISTA </option>
                  <option value="PROFESSOR" >PROFESSOR</option>
                  <option value="SECRETARIA">SECRETARIA</option>
                  <option value="SUPERVISÃO">SUPERVISÃO </option>
                  <option value="SUPORTE"> SUPORTE </option>
                </select >
              </label>
            </div > */}

            <div className="">
              <button type="submit" className="btn btn-primary mr-1 ">Salvar</button>
              <Link to='/usuarios' className="btn btn-secondary ">Cancelar</Link>

            </div>


          </form >
        </div >

      </div >


    </div >
  )

}

export default User