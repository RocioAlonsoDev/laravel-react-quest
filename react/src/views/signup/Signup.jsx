import {Link} from 'react-router-dom';
import { useState } from 'react';
import APIservice from '../../APIservice/APIservice'
import { UseStateContext } from '../../context/ContextProvider'

function Signup() {
  const{setCurrentUser, setUserToken} = UseStateContext();
  const[fullName,setFullName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[passwordConfirmation,setPasswordConfirmation] = useState('');
  const[error,setError] = useState({__html: ''});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({__html:''})

    APIservice.post('/signup',{
      name: fullName,
      email,
      password,
      password_confirmation: passwordConfirmation
    })
    .then(({data})=>{
      setCurrentUser(data.user)
      setUserToken(data.token)
    })
    .catch((error)=>{
      if(error.response){
        const finalErrors= Object.values(error.response.data.errors).reduce((accum, next) => 
        [...accum, ...next], [])
        setError({__html: finalErrors.join('<br />')})
      }
      console.log(error)
    })

  }

  return (
    <>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ¿Listo para una nueva aventura? 
            <br />
            Crea tu cuenta.
          </h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error.__html && (
            <div className='bg-red-500 rounded py-2 px-3 text-white'
            dangerouslySetInnerHTML={error}>
            </div>
          )}
          <form onSubmit={onSubmit} action='#' className="space-y-6" method="POST">
          <div>
              <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  value={fullName}
                  onChange={ev => setFullName(ev.target.value)}
                  id="full-name"
                  name="name"
                  type="text"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Elsa Pato"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={ev => setEmail(ev.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="elsa@pato.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={ev => setPassword(ev.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="******"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password-confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirma tu contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={passwordConfirmation}
                  onChange={ev => setPasswordConfirmation(ev.target.value)}
                  id="password-confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="******"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes cuenta en Quest?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Inicia sesión aquí.
            </Link>
          </p>
        </div>
    </>
  )
}

export default Signup;