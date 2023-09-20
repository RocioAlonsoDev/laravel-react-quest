import PageComponent from "../../components/organisms/pageComponent/PageComponent"
import { UseStateContext } from "../../context/ContextProvider"
import QuestAtom from "../../components/atoms/questAtom/QuestAtom"
import ButtonAtom from "../../components/atoms/buttonAtom/ButtonAtom";

export default function Home() {
  const { quests } = UseStateContext();
  const onDeleteClick = () => {
    console.log("On Delete Click")
  }

  return (
    <>
      <PageComponent title='Inicio' 
      buttons={
        <ButtonAtom color='green' to='/create-quest'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
          </svg>
          Nueva Quest
        </ButtonAtom>
      }>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {quests.map(quest => (
          <QuestAtom quest={quest} key={quest.id} onDeleteClick={onDeleteClick}></QuestAtom>
        ))}
        </div>
      </PageComponent>
    
      
    </>
  )
}
