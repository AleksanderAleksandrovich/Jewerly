import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/components/layouts/AppLayout'
import Home from './pages/Home'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [ {
      element: <Home />,
      path: '/'
    }]
  }
])
