import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import {store} from './redux'
import { Provider } from 'react-redux'

import './index.css';
import router from './router';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <section className='container'>
      <RouterProvider router={router} />
      </section>
    </Provider>
  </React.StrictMode>
)
