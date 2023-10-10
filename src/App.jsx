import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Create from './pages/Search'
import Recipie from './pages/Recipie'
import Readmore from './pages/Readmore'
import Eror from './pages/Eror'
import Search from './pages/Search'
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Eror/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: 'search',
          element: <Search/>,

        },
        {
          path: 'recipie',
          element: <Recipie/>,
        },
        {
          path: 'docs/:id',
          element: <Readmore/>,
        }
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App