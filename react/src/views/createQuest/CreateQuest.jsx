import PageComponent from "../../components/organisms/pageComponent/PageComponent"
import { useState } from "react"
import APIservice from '../../APIservice/APIservice'
import { useNavigate } from "react-router-dom"

export default function CreateQuest() {
  const navigate = useNavigate()
  const [error, setError] = useState("");

  const [quest, setQuest] = useState({
    title: '',
    description: '',
    banner_img: null,
    banner_img_url: null,
    requisites: '',
    date: '',
    location: '',
    max_users: null,
    // tags: '',
    status: true
  })

  const onImageChoose = (ev) => {
    const file = ev.target.files[0];
    console.log('Selected file: ',file)
    const reader = new FileReader();
    reader.onload = () => {
      setQuest({
        ...quest,
        banner_img: file,
        banner_img_url: reader.result
      })
      ev.target.value = "";
    }
    reader.readAsDataURL(file)
  }

  const onSubmit = (ev) => {
    ev.preventDefault();

      const payload = { ...quest};

      if (payload.banner_img) {
        payload.banner_img = payload.banner_img_url
      }
      delete payload.banner_img_url;

      if(payload.max_users){
        payload.max_users = parseInt(payload.max_users)
      }

      APIservice.post('/quest',payload)
      .then(() => {
        navigate('/home')
      })
      .catch(err=> {
        if (err && err.response) {
          setError(err.response.data);
        }
      })
   
  }
  return (
    <>
      <PageComponent title='Nueva Quest'>
      <form action="#" method='POST' onSubmit={onSubmit}>
      <div className="space-y-12 shadow sm:overflow-hidden sm:rounded-md">
        <div className="border-b  space-y-6 bg-white px-4 py-5 sm:p-6">
          {error && (
            <div className="bg-red-500 text-white py-3 px-3">{error.message}</div>
          )}
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
                   value={quest.title}
                   onChange={(ev) =>
                     setQuest({ ...quest, title: ev.target.value })
                   }
                   
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {/* {error.title && (
                <small className="text-red-500">{error.title}</small>
              )} */}
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
                  onChange={(ev) =>
                    setQuest({ ...quest, description: ev.target.value })
                  }
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
                       <div className="mt-1 flex items-center">
                        {quest.banner_img_url && (
                          <img
                            src={quest.banner_img_url}
                            alt=""
                            className="w-32 h-32 object-cover"
                          />
                        )}
                        {!quest.banner_img_url && (
                          <span className="mx-auto flex justify-center  items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                          </span>
                        )}
                        </div>
                      

                      <span>Sube una imagen</span>
                      <input id="banner-img" onChange={onImageChoose} name="banner_img" type="file" className="sr-only" />
                    </label>
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
                    onChange={(ev) =>
                      setQuest({ ...quest, location: ev.target.value })
                    }
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
                name="date"
                id="date"
                value={quest.date}
                onChange={(ev) =>
                  setQuest({ ...quest, date: ev.target.value })
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
                  value={quest.title}
                  onChange={(ev) =>
                    setQuest({ ...quest, requisites: ev.target.value })
                  }
                  placeholder="Ejemplo: Cuenta de Zoom"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Requisites*/}

            {/*Max_users*/}
              <div className="sm:col-span-3">
                <label htmlFor="max-users" className="block text-sm font-medium leading-6 text-gray-900">
                  ¿Cuántos usuarios pueden participar?
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="max_users"
                    id="max-users"
                    onChange={(ev) =>
                      setQuest({ ...quest, max_users: ev.target.value })
                    }
                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            {/*Location*/}

            {/* Tags*/}
            {/* <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Etiquetas
              </label>
              <div className="mt-2">
                <textarea
                  id="tags"
                  name="tags"
                  rows={4}
                  onChange={(ev) =>
                    setQuest({ ...quest, tags: ev.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div> */}
            {/*Tags */}

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
