import { createContext, useContext }  from "react";
import { useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    events: [],
    setCurrentUser: () => {},
    setUserToken: () => {}
})

const tmpEvent = [
    {
        "id": 1,
        "img_url": "https://1.bp.blogspot.com/-0E9LisoQf8U/X7QCrmhwqjI/AAAAAAAAPqs/SyI4WtAagL4aE7vBzvqezSY0oTk58COewCNcBGAsYHQ/w1200-h630-p-k-no-nu/thumbgtavgtathumb.jpg",
        "title": "Marbella Vice | GTA5 RP",
        "status": true,
        "description": "La modalidad de roleplay en GTA 5 online ha tomado inspiración de las campañas de juegos de rol tradicionales," 
            +"convirtiéndose en un espacio fascinante para experimentar aventuras únicas. Al sumergirnos en el mundo del roleplay de GTA 5, "
            +"creamos un personaje, adoptamos su personalidad y nos embarcamos en un viaje de exploración y acción. <br>"
            +"En este apasionante escenario, la verdadera atracción es la diversidad y la dinámica del grupo de jugadores. Cada jugador posee"
            +" su personaje individual con metas y personalidades distintas, sumándose a la historia para alcanzar objetivos o descubrir los"
            +"  confines del mundo virtual de GTA 5.",
        "date": "2023-03-25",
        "creator": "el Kike",
        "requisites": "GTA V Online",
        "tags": ["RP","gta5","roleplay"],
        "participants": 11
    },
    {
        "id": 2,
        "img_url": "https://static.fandomspot.com/images/03/13283/00-featured-dusk-bridge-in-autumn-acnh-idea.jpg",
        "title": "Visita Isla Bonita | ACNH",
        "status": true,
        "description": "La modalidad de roleplay en GTA 5 online ha tomado inspiración de las campañas de juegos de rol tradicionales," 
            +"convirtiéndose en un espacio fascinante para experimentar aventuras únicas. Al sumergirnos en el mundo del roleplay de GTA 5, "
            +"creamos un personaje, adoptamos su personalidad y nos embarcamos en un viaje de exploración y acción. <br>"
            +"En este apasionante escenario, la verdadera atracción es la diversidad y la dinámica del grupo de jugadores. Cada jugador posee"
            +" su personaje individual con metas y personalidades distintas, sumándose a la historia para alcanzar objetivos o descubrir los"
            +"  confines del mundo virtual de GTA 5.",
        "date": "2023-03-26",
        "creator": "Mayor Kiki",
        "requisites": "Nintendo Switch, Nintendo Switch Online, Animal Crossing: New Horizons",
        "tags": ["ACNH","animal crossing",""],
        "participants": 9
    }
]

export const ContextProvider = ({ children }) => {
    const [currentUser,setCurrentUser] = useState({
        // name: 'Usuario Prueba',
        // email: 'usuario@prueba.com',
        // imageUrl:
        //   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    })
    
    const [userToken,_setUserToken] = useState(localStorage.getItem('TOKEN') || '')
    const [quests,setQuests] = useState(tmpEvent)

    const setUserToken = (token) => {
        if(token){
            localStorage.setItem('TOKEN', token)
        } else {
            localStorage.removeItem('TOKEN')
        }

        _setUserToken(token)
    }

    return(
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            quests
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const UseStateContext = () => useContext(StateContext)