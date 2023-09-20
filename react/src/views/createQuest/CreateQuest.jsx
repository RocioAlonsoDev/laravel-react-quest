import PageComponent from "../../components/organisms/pageComponent/PageComponent"
import { useState } from "react"
import ButtonAtom from '../../components/atoms/buttonAtom/ButtonAtom'

export default function CreateEvent() {
  const [event, setEvent] = useState({
    title: '',
    slug: '',
    status: false,
    description: '',
    image: null,
    image_url: null,
    expire_date: '',
    tags: []
  })

  const onImageChoose = () => {
    console.log('On image choose')
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev);
  }

  return (
    <>
      <PageComponent title='Nueva Quest'>
        <form action="#" method='POST' onSubmit={onSubmit}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              {/* {Image} */}
              <div>
                <label htmlFor="" className="block text-sm font-medium text-gray-700">
                  Añade una imagen
                </label>
                <div className="mt-1 flex items-center">
                  {event.img_url && (
                    <img 
                    src={event.image_url}
                    alt=''
                    className="w-32 h-32 object-cover"
                    />
                  )}
                  {!event.img_url && (
                    <span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </span>
                  )}
                  <button
                    type="button"
                    className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <input
                      type="file"
                      className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                      onChange={onImageChoose}
                    />
                    Change
                  </button>
                </div>
              </div>
              {/*Image*/}

              {/*Title*/}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700">
                  Survey Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={event.title}
                  onChange={(ev) =>
                    setEvent({ ...event, title: ev.target.value })
                  }
                  placeholder="Event Title"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              {/*Title*/}
              {/*Description*/}
               <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                {/* <pre>{ JSON.stringify(survey, undefined, 2) }</pre> */}
                <textarea
                  name="description"
                  id="description"
                  value={event.description || ""}
                  onChange={(ev) =>
                    setEvent({ ...event, description: ev.target.value })
                  }
                  placeholder="Describe your survey"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              {/*Description*/}

              {/*Expire Date*/}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="expire_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expire Date
                </label>
                <input
                  type="date"
                  name="expire_date"
                  id="expire_date"
                  value={event.expire_date}
                  onChange={(ev) =>
                    setEvent({ ...event, expire_date: ev.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              {/*Expire Date*/}

              {/*Active*/}
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="status"
                    name="status"
                    type="checkbox"
                    checked={event.status}
                    onChange={(ev) =>
                      setEvent({ ...event, status: ev.target.checked })
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    Active
                  </label>
                  <p className="text-gray-500">
                    Whether to make survey publicly available
                  </p>
                </div>
              </div>
              {/*Active*/}

              {/* <button type="button" onClick={addQuestion}>
                Add question
              </button>
              <SurveyQuestions
                questions={survey.questions}
                onQuestionsUpdate={onQuestionsUpdate}
              /> */}
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <ButtonAtom>Save</ButtonAtom>

                </div>
              </div>
            
        </form>
      </PageComponent>
    </>  
    )
}
