import React, { useState, useEffect } from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

interface Users {
  id: number,
  name: string,
  email: string,
  profile: string,
}

const User = () => {

  const { data } = useFetch<Users[]>('/users')
  //const [users, setUsers] = useState(teste)
  const [users, setUsers] = useState(data)
  // const [search, setSearch] = useState<string>('')

  useEffect(() => {
    document.title = 'Usuários'
  }, [])

  useEffect(() => {
    setUsers(data)
  }, [data])

  if (!data || !users) {
    return <p>Carregando...</p>
  }

  // async function handleSearch(event: ChangeEvent<HTMLInputElement>) {
  //   const { value } = event.target
  //   setSearch(value)

  //   const searchLength = Number(search?.length)
  //   // console.log(searchLength)
  //   if (searchLength > 2) {
  //     const { data } = await api.get(`/users/filter/${search}`)
  //     setUsers(data)
  //     // reload =  false
  //     return
  //   }
  //   // reload = true
  // }
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-2">
        <h2>Lista de Usuários</h2>
        <Link to='/usuario/cadastrar' className="btn btn-primary"> Cadastrar Usuário</Link>
        {/* <a href="{{ route('users.create') }}" type="button" className="btn btn-primary pt-2">Cadastrar Usuário</a> */}
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Perfil</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.email}</td>
              <td> {user.profile}</td>
              <td>
                <Link to={`/usuario/editar/${user.id}`} >
                  <FaEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default User 