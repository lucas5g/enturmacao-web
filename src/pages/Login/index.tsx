import React, { ChangeEvent, useState, FormEvent } from 'react';
import api from '../../service/api';

// import { Container } from './styles';
interface Login{
    email: string,
    password: string
}

interface Button{
    value: string,
    status: boolean
}

const Login: React.FC = () => {

    const [login, setLogin] = useState<Login>({email:'', password:''})
    const [button, setButton] = useState<Button>({value: 'Entrar', status: false})

    const handleChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target

        setLogin({...login, [name]:value})


    }

    const handleSubmit = async (event:FormEvent) => {
        event.preventDefault()
        
        setButton({value: 'Carregando...', status: true})
        console.log({login})
        try {
            const { data } = await api.post('/login', login)
            console.log(data)
      
            // localStorage.setItem('logged', JSON.stringify(data.user))
            // localStorage.setItem('token', data.token)
            
            // window.location.reload()
            /** */
          } catch (e) {
              window.alert('Senha ou Usuário - Inválidos')
              setButton({value: 'Entrar', status: false})
              setLogin({email: 'testeste', password: ''})

          }
    
    
        console.log('subiu')
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100" >
            <form  className="rounded p-5 bg-white w-50" onSubmit={ handleSubmit}>
                <div className="form-group ">
                    <label className= "w-100" >
                        Email
                        <input
                             name="email" 
                            type="email" 
                            className="form-control "
                            value={login.email} 
                            onChange={handleChangeInput} />
                    </label>
                </div>
                <div className="form-group">
                    <label className="w-100" >
                        Senha
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            value={login.password}
                            onChange={handleChangeInput} />
                    </label>
                </div>

                <button disabled={button?.status} type="submit" className="btn btn-primary">{button?.value}</button>
            </form>
        </div >
    )
}

export default Login