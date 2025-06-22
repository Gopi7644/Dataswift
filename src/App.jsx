import { Children, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Applayout/Layout'
import Home from './Pages/Home'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {
  const [count, setCount] = useState(0)

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/service',
          element: <Service />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ]
    },
  ])

  return (
    <>
    <RouterProvider router={Router} />
    </>
  )
}

export default App
