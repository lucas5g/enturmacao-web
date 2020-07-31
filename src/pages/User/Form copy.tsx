
import React, { useState, useEffect, ChangeEvent } from 'react'
import api from '../../service/api'
import logout from '../../utils/logout'
import Loading from '../../components/Loading'
import { Link, useHistory, useParams } from 'react-router-dom'
import AlertModal from '../../components/AlertModal'
import { FaTrash } from 'react-icons/fa'
// import {loadUsers} from '../utils/load'

function User() {

 
  // const [user, setUser] = useState({ email: '', email_sup:'', email_secretary:'', password: '', name: '', profile_name: '',  courses: [], coursesDelete:[] })
  // /*
  // const [user, setUser] = useState({ email: 'teste', email_sup:'testes', email_secretary:'teste', password: 'qwq', name: 'teste',
  //  profile_name: 'SUPORTE',  courses: [], coursesDelete:[] 
  // })
  // /** */
  // const [alert, setAlert] = useState({ message: '', color: '' })
  // const [btn, setBtn] = useState({ label: 'Salvar', disabled: false })
  // const [loading, setLoading] = useState(true)
  // const [header, setHeader] = useState('Cadastrar Usuário')
  // const [modalShow, setModalShow] = useState(false)
  // // const profiles = JSON.parse(localStorage.getItem('profiles'))
  // // const courses = JSON.parse(localStorage.getItem('courses'))
  // const { id } = useParams()
  // const history = useHistory()

  // useEffect(() => {
  //   window.scrollTo(0 ,0)
  //   if (id === undefined) {
  //     document.title = 'Cadastrar Usuário'
  //     setLoading(false)
  //     return
  //   }
  //   async function load() {
  //     const { data } = await api.get(`/users/${id}`)
  
  //     setUser(data)
  //     document.title = 'Editar Usuário'
  //     setHeader('Editar Usuário')
  //     setLoading(false)
  //   }
   
  //   load()
  // }, [id])
  // async function loadAgain() {
  //   //console.log('teste')
  //   const { data } = await api.get(`/users/${id}`)
  //   setUser(data)
   
  // }
  // async function handleSubmit(event: ChangeEvent<HTMLInputElement>) {
  //   event.preventDefault()
  //   setBtn({ label: 'Salvando...', disabled: true })

  //   try {
  //     if (id) {
  //       const { status } = await api.put(`/users/${id}`, user)
      
  //       if (status === 200) {
    
  //         setAlert({ message: 'Usuário Atualizado com Sucesso!', color: 'success' })
  //         setModalShow(true)
  //          /** */
  //         setBtn({ label: 'Salvar', disabled: false })
  //         loadAgain()
         
       
  //       }
  //       return
  //     }

  //     const { data } = await api.post('/users', user)
  //     //console.log(data)
  //     const { message } = data
  //     if (message) {
  //       setAlert({ message, color: 'warning' })
  //       setModalShow(true)
  //       setBtn({label:'Salvar', disabled: false})
  //       return;
  //     }
  //     // loadUsers()
  //     setAlert({message:'Cadastrado com Sucesso', color: 'success'})
  //     setModalShow(true)
  //     setBtn({label:'Salvar', disabled:false})
  //     history.push(`/usuarios/editar/${data.id}`)

  //   } catch (e) {
  //     logout()
  //   }
   
  // }
  // const handleDeleteCourse = (id: number) => {
    
  //   setUser({
  //     ...user,
  //     courses: user.courses.filter(r =>  r.id !== id),
  //     coursesDelete:[...user.coursesDelete, user.courses.find((r) => r.id === parseInt(id))]   
  //   })
   
  // }
  // const handleAddCourse = (id) => {
    
  //   const courseVerify = user.courses.find( r => r.id === parseInt(id))

  //   if(courseVerify)
  //     return;

  //   const coursesMy = [...user.courses, courses.find(r => r.id === parseInt(id))]

    
  //   coursesMy.sort((a, b) => {
  //     let x = a.name 
  //     let y = b.name 
  //     return x < y ? -1 : x > y ? 1 : 0
  //   })
  //   /** */
  //   coursesMy.sort((a,b) => {
  //     let x = a.unity 
  //     let y = b.unity 
  //     return x < y ? - 1: x > y ? 1 : 0
  //   })


  //   setUser({
  //     ...user,
  //     courses: coursesMy,
  //     coursesDelete: user.coursesDelete.filter(r => r.id !== id )
  //   })

  // }
  // const updateField = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value })
  // }
  // return (
  //   <>
  //     {
  //       loading ?
  //         <Loading />
  //         :
  //         <div className="container-fluid">

  //           <div className="row">
  //             <div className="col-md-12">
  //               <Link className="btn btn-outline-danger float-right" to='/usuarios'>Fechar</Link>
  //               {user.email && user.email_sup && user.email_secretary && user.name && user.profile_name &&
  //                 <button className="btn btn-outline-indigo float-right"  disabled={btn.disabled} onClick={handleSubmit}>{btn.label}</button>
  //               }
  //             </div>
  //           </div>
  //           <div className="row justify-content-center">
  //             <div className="col-md-6">
  //               <div className="card">
  //                 <h5 className="card-header blue white-text text-center">
  //                   <strong>{header}</strong>
  //                 </h5>
  //                 <div className="card-body p2">

  //                   <div className="md-form mt-1">
  //                     <input type="email" name="email" id="email" className="form-control" value={user.email}
  //                       onChange={updateField} placeholder="E-mail" required />
  //                     {user.email &&
  //                       <label htmlFor="email" >E-mail</label>
  //                     }
  //                   </div>
  //                   <div className="md-form form-row mt-2">
  //                     <div className="col-md-6">
  //                       <input type="email" name="email_sup" id="email_sup" className="form-control" value={user.email_sup}
  //                         onChange={updateField} placeholder="E-mail Supervisão" required />
  //                       {user.email_sup &&
  //                         <label htmlFor="email" style={{ 'marginLeft': 5 }} >E-mail Supervisão</label>
  //                       }
  //                     </div>
  //                     <div className="col-md-6">
  //                       <input type="email" name="email_secretary" id="email_secretary" className="form-control" value={user.email_secretary}
  //                         onChange={updateField} placeholder="E-mail Secretaria" required />
  //                       {user.email &&
  //                         <label htmlFor="email_secretary" style={{ 'marginLeft': 5 }} >E-mail Secretaria</label>
  //                       }
  //                     </div>
  //                   </div>
  //                   <div className="md-form ">
  //                     <input type="password" name="password" id="password" className="form-control" value={user.password || ''}
  //                       onChange={updateField} placeholder="Password" />
  //                     {user.password &&
  //                       <label htmlFor="email" >Password</label>
  //                     }
  //                   </div>
  //                   <div className="md-form ">
  //                     <input type="text" name="name" id="name" className="form-control" value={user.name}
  //                       onChange={updateField} placeholder="Name" required />
  //                     {user.name &&
  //                       <label htmlFor="name" >Name</label>
  //                     }
  //                   </div>

  //                   <div className="md-form">
  //                     <select value={user.profile_name} className="form-control select-form-control"
  //                       onChange={updateField} name="profile_name" required>
  //                       <option value="">Selecione o Perfil</option>
  //                       {profiles.map(r =>
  //                         <option key={r.id} value={r.name}>{r.name}</option>
  //                       )}
  //                     </select>

  //                   </div>
  //                 </div>

  //               </div>

  //             </div>
  //             <div className="col-md-6">
            
  //               <div className="card">
  //                 <h5 className="card-header blue white-text text-center">
  //                   <strong>Cursos</strong>
  //                 </h5>
  //                 <div className="card-body p2">
  //                   <div className="md-form mt-0">
  //                     <select className="form-control select-form-control"
  //                       onChange={e => handleAddCourse(e.target.value)} value="" name="profile_name" required>
  //                       <option value="">Selecione o Curso</option>
  //                       {courses.map(r =>
  //                         <option key={r.id} value={r.id}>{r.unity} - {r.name} - {r.shift}</option>
  //                       )}
  //                     </select>

  //                   </div>
  //                   <table className="table">
  //                     <tbody>
  //                       {user.courses.map(r =>
  //                         <tr key={r.id}>
  //                           <td>{r.unity}</td>
  //                           <td>{r.name}</td>
  //                           <td>{r.shift}</td>
  //                           <td title="Excluir curso" style={{ 'cursor': 'pointer' }} onClick={() => handleDeleteCourse(r.id)}>
  //                             <FaTrash />
  //                           </td>
  //                         </tr>
  //                       )}
  //                     </tbody>
  //                   </table>
  //                 </div>
  //               </div>
                  
  //             </div>
  //           </div>

  //           <AlertModal
  //             show={modalShow}
  //             color={alert.color}
  //             message={alert.message}
  //             onHide={() => setModalShow(false)}
  //           />
  //         </div>
  //     }
  //   </>


  // )
  // )
}

export default User