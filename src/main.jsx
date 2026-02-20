import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layouts/MainLayout.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import Home from './components/Home.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

import SignUp from './components/SignUp.jsx';

import AuthProvider from './contexts/AuthProvider.jsx';
import Users from './components/Users.jsx';
import SignIn from './components/Signin.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://2-19-coffee-store-server-v1.vercel.app/coffees'), 
        Component: Home
      },

      {path: "/add-coffee", Component: AddCoffee},
      {path: "/coffeeDetails/:id",
        Component: CoffeeDetails,
        loader: ({params}) => fetch(`https://2-19-coffee-store-server-v1.vercel.app/${params.id}`), 
      },
      {path: "/update-coffee/:id",
        loader: ({params}) => fetch(`https://2-19-coffee-store-server-v1.vercel.app/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/users",
        loader: () => fetch('https://2-19-coffee-store-server-v1.vercel.app/users'),
        Component: Users,
      }
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
