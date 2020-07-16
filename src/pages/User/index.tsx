import React, { useState, useEffect, ChangeEvent } from 'react'
import { FaEdit, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import api from '../../service/api'
import { useFetch } from '../../hooks/useFetch'

interface Users {
  id: number,
  name: string,
  email: string,
  profile_name: string,
}

const User = () => {

  const { data } = useFetch<Users[]>('/users')
  //const [users, setUsers] = useState(teste)
  const [users, setUsers] = useState(data)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    document.title = 'Usuários'
  }, [])

  useEffect(() => {
    setUsers(data)
  }, [data])

  if (!data || !users ) {
    return <p>Carregando...</p>
  }

  async function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setSearch(value)

    const searchLength = Number(search?.length)
    // console.log(searchLength)
    if (searchLength > 2) {
      const { data } = await api.get(`/users/filter/${search}`)
      setUsers(data)
      // reload =  false
      return
    }
    // reload = true
  }
  return (
    <div className="container mt-4">
      <div className="card">
        <h5 className="card-header blue white-text text-center">
          <strong>Usuários </strong>
          <strong className="float-right" title="Adicionar Usuário">
            <Link to="/usuarios/cadastrar"> <FaPlus color="white" /></Link>
          </strong>

        </h5>
        <div className="card-body p2">
          <input type="text" className="form-control py-4" placeholder="Pesquisar Usuário" value={search} name="search" onChange={handleSearch} />
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {users.map(r =>
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td>{r.profile_name}</td>
                  <td><Link title="Editar Usuário" to={`/usuarios/editar/${r.id}`}><FaEdit /></Link></td>
                </tr>
              )}


              {/* {data.map(r =>
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td>{r.profile_name}</td>
                  <td><Link title="Editar Usuário" to={`/usuarios/editar/${r.id}`}><FaEdit /></Link></td>
                </tr>
              )} */}

            </tbody>

          </table>
        </div>

      </div>

    </div>

  )
}

export default User 