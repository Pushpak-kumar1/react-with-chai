import { Children } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    Children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "contact",
        element : <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
