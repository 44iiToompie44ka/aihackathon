import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PageNotFound } from './components/pages/page_not_found.tsx'
import AlchemyScreen from './components/pages/alchemy_game/components/alch_page.tsx'


const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />
  },
  {
    path: "/aihackathon/",
    element: <App />
  },
  {
    path: "/aihackathon/alchemy/",
    element: <AlchemyScreen />,
  },



])

WebApp.ready();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

