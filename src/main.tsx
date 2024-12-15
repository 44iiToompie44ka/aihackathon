import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AlchemyScreen } from './components/pages/alchemy_game/alchemy_page.tsx'
import { PageNotFound } from './components/pages/page_not_found.tsx'


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

