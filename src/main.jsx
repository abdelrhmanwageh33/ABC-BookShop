import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import {routing} from '../src/Components/AppRouting/AppRouting'
import 'react-loading-skeleton/dist/skeleton.css'


createRoot(document.getElementById('root')).render(
  <RouterProvider router={routing}></RouterProvider>
)
