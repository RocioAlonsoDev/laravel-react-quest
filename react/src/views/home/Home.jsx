import PageComponent from "../../components/organisms/pageComponent/PageComponent"
import QuestAtom from "../../components/atoms/questAtom/QuestAtom"
import ButtonAtom from "../../components/atoms/buttonAtom/ButtonAtom";
import { useEffect ,useState } from "react";
import APIservice from '../../APIservice/APIservice'
// import Router from "../../config/Router";

export default function Home() {
  const [quests, setQuests] = useState([])
  const [loading,setLoading] = useState(true)

  const CACHE_EXPIRATION_TIME = 60000;

  // const onDeleteClick = (id) => {
  //   if(window.confirm('Estás apunto de eliminar este evento. ¿Quieres continuar?')){
  //     APIservice.delete(`/quest/${id}`)
  //     .then(()=>{
  //       Router.navigate('/');
  //     })
  //   }
  // }

  useEffect(() => {    
    const getQuests = () => {
      const cachedData = JSON.parse(localStorage.getItem("cachedData"));
      const cacheTimestamp = localStorage.getItem("cacheTimestamp");
      if (cachedData && cacheTimestamp) {
        const currentTime = new Date().getTime();
        if (currentTime - parseInt(cacheTimestamp, 10) <= CACHE_EXPIRATION_TIME) {
          setQuests(cachedData);
          setLoading(false);
        }
      }else{
          let url = "/quest"
          APIservice.get(url)
            .then(({ data }) => {
              setQuests(data.data);
              setLoading(false);
              localStorage.setItem("cachedData",JSON.stringify(data.data))
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
              setLoading(false);
            });
        }
    }
    getQuests()
  },[]);

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
        {loading && 
        <div className="text-lg text-center">
          Cargando quests...
        </div>}
        {!loading && 
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {quests.map(quest => (
              <QuestAtom quest={quest} key={quest.id} onDeleteClick={() => onDeleteClick(quest.id)}></QuestAtom>
            ))}
          </div>
        }
      </PageComponent>
    
      
    </>
  )
}
