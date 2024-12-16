import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PageNotFound } from './pages/page_not_found.tsx'
import AlchemyScreen from './pages/alchemy_game'
import MyPage from './pages/prko/page.tsx'
import NewYearGreetings from './pages/zxc/page.tsx'



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
  {
    path: "/aihackathon/mypage",
    element: <MyPage />
  },
  {
    path: "/aihackathon/newyearzxc",
    element: <NewYearGreetings />
  }



])

WebApp.ready();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

