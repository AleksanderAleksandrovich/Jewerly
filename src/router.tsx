import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'

export const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/'
  },
])
