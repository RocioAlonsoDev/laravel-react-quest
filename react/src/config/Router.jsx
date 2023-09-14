import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/home/Home';
import Login from '../views/login/Login'
import Signup from '../views/signup/Signup'
import Profile from '../views/profile/Profile'
import CreateEvent from '../views/createEvent/CreateEvent'
import Event from '../views/event/Event'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/create-event',
        element: <CreateEvent/>
    },
    {
        path: '/event',
        element: <Event/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
])

export default Router;
