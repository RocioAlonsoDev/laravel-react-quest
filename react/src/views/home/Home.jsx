import PageComponent from "../../components/organisms/pageComponent/PageComponent"
import { UseStateContext } from "../../context/ContextProvider"
import EventAtom from "../../components/atoms/eventAtom/EventAtom"

export default function Home() {
  const { events } = UseStateContext();
  console.log(events);
  return (
    <>
    
      <PageComponent title='Inicio'>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {events.map(event => (
          <EventAtom event={event} key={event.id}></EventAtom>
        ))}
        </div>
      </PageComponent>
    
      
    </>
  )
}
