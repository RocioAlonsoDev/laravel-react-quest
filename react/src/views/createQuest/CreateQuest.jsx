import PageComponent from "../../components/organisms/pageComponent/PageComponent"
import { useState } from "react"
import APIservice from '../../APIservice/APIservice'

export default function CreateEvent() {
  const [event, setEvent] = useState({
    title: '',
    description: '',
    banner_img: null,
    requisites: '',
    date: '',
    location: '',
    max_users: null,
    tags: '',
    status: true
  })

  const onImageChoose = () => {
    console.log('On image choose')
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    APIservice.post('/quest',{
      title: 'Lorem Ipsum',
      description: 'Test',
      location: 'Online',
      date: '2023-12-07T00:00',
      requisites: 'Zoom account',
      status: true
    })
   
  }

  return (
    <>
      <PageComponent title='Nueva Quest'>
      <form action="#" method='POST' onSubmit={onSubmit}>
      <div className="space-y-12 shadow sm:overflow-hidden sm:rounded-md">
        <div className="border-b  space-y-6 bg-white px-4 py-5 sm:p-6">


          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/*Title*/}
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre del evento
              </label>
              <div className="mt-2">
                <input
                   type="text"
                   name="title"
                   id="title"
                   value={event.title}
                   onChange={(ev) =>
                     setEvent({ ...event, title: ev.target.value })
                   }
                   
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Title*/}

            {/*Description*/}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Descripción
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            {/*Description*/}

            {/*Banner*/}
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Portada
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">

                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="banner-img"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Sube una imagen</span>
                      <input id="banner-img" name="banner_img" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">o arrastra y suéltala aquí.</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
                </div>
              </div>
            </div>
            {/*Banner*/}

            

            {/*Location*/}
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  ¿Dónde?
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            {/*Location*/}

            {/*Date*/}
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                ¿Cuándo?
              </label>
              <div className="mt-2">
                <input
                type="datetime-local"
                name="expire_date"
                id="expire_date"
                value={event.expire_date}
                onChange={(ev) =>
                  setEvent({ ...event, expire_date: ev.target.value })
                }
                className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Date*/}

            {/*Requisites*/}
            <div className="sm:col-span-3">
              <label htmlFor="requisites" className="block text-sm font-medium leading-6 text-gray-900">
                Requisitos para los asistentes
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="requisites"
                  id="requisites"
                  value={event.title}
                  onChange={(ev) =>
                    setEvent({ ...event, title: ev.target.value })
                  }
                  placeholder="Ejemplo: Cuenta de Zoom"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Requisites*/}

            {/*Location*/}
              <div className="sm:col-span-3">
                <label htmlFor="max-users" className="block text-sm font-medium leading-6 text-gray-900">
                  ¿Cuántos usuarios pueden participar?
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="max_users"
                    id="max-users"
                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            {/*Location*/}

            {/*Tags*/}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Etiquetas
              </label>
              <div className="mt-2">
                <textarea
                  id="tags"
                  name="tags"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            {/*Tags*/}

            <div className="mt-6 flex items-center justify-end gap-x-6 col-span-full">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
          </div>
        </div>
      </div>      
      </form>
      </PageComponent>
    </>  
    )
}
