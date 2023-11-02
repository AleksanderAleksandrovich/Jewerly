import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/components/layouts/AppLayout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import CatalogLayout from './components/layouts/CatalogLayout'
import Rings from './pages/Catalog/Rings'
import Earrings from './pages/Catalog/Earrings'
import Bracelets from './pages/Catalog/Bracelets'
import ForHim from './pages/Catalog/ForHim'
import ForWedding from './pages/Catalog/ForWedding'
import Pendants from './pages/Catalog/Pendants'
import News from './pages/Catalog/News'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
    ],
  },
  {
    element: <CatalogLayout />,
    children: [
      {
        element: <Catalog />,
        path: '/catalog',
        children: [
          {
            element: <Rings/>,
            path: 'rings',
          },
          {
            element: <Earrings/>,
            path: 'earrings',
          },
          {
            element: <Bracelets/>,
            path: 'bracelets',
          },
          {
            element: <ForHim/>,
            path: 'forHim',
          },
          {
            element: <ForWedding/>,
            path: 'forWedding',
          },
          {
            element: <Pendants/>,
            path: 'pendants',
          },
          {
            element: <News/>,
            path: 'news',
          },
        ],
      },
    ],
  },
])
