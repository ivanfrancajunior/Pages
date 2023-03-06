import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider, Route  } from 'react-router-dom';

//páginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Gerenciar from './routes/Gerenciar';

const router = createBrowserRouter ([
  {
    element:<App />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/new',
        element: <NewPost />
      },
      {
        path:'/edit',
        element: <Gerenciar />
      },
      {
        path:'posts/edit-post/',
        element: <Gerenciar />
      },
      {
        path:'posts/delete-post/',
        element: <Gerenciar />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router ={router}/>
  </React.StrictMode>,
)
