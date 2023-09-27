import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from '../views/home/Home';
import Login from '../views/login/Login';
import Signup from '../views/signup/Signup';
import Profile from '../views/profile/Profile';
import CreateQuest from '../views/createQuest/CreateQuest';
import Quest from '../views/quest/Quest';
import DefaultLayout from '../components/organisms/defaultLayout/DefaultLayout';
import Explore from '../views/explore/Explore';
import Settings from '../views/settings/Settings';
import GuestLayout from '../components/organisms/guestLayout/GuestLayout';

const Router = createBrowserRouter([
    {
        path: '/home',
        element: <Navigate to='/'/>
    },
    {
        path: '/dashboard',
        element: <Navigate to='/'/>
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
            path: '/',
            element: <Home/>
        },
        {
            path: '/explore',
            element: <Explore/>
        },
        {
            path: '/create-quest',
            element: <CreateQuest/>
        },
        {
            path: '/quest/:id',
            element: <CreateQuest/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/settings',
            element: <Settings/>
        },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        ]
    },
])

export default Router;
