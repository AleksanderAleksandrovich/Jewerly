import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/components/layouts/AppLayout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import CatalogLayout from './components/layouts/CatalogLayout'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [ {
      element: <Home />,
      path: '/'
    }]
  },
  {
    element: <CatalogLayout/>,
    children: [ {
      element: <Catalog />,
      path: '/catalog'
    }]
  }
])
