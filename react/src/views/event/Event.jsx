import PageComponent from "../../components/organisms/pageComponent/PageComponent"
import { UseStateContext } from "../../context/ContextProvider"

export default function Event() {
  const { events } = UseStateContext();
  console.log(events);
  
  return (
    <>
      <PageComponent title='Event'>
        Children
      </PageComponent>
    </>
  )
}
