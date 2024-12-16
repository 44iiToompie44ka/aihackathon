"use client";
import { StrictMode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { PageNotFound } from "../components/pages/page_not_found"
import App from "../App"
import AlchemyScreen from "../components/pages/alchemy_game"

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
export default function RootLayout({
    
  }: {
    children: React.ReactNode
  }) {
    return (   <html lang="en">
        <body>
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
        </body>
      </html>)
  }