import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction, } from './routes/root';
import ErrorPage from './pages/error-page';
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact';
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import darkTheme from '../src/styles/styles'
import { ThemeProvider } from 'styled-components';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     errorElement: <ErrorPage />,
    //     children: [
    //       { index: true, element: <Index /> },
    //       {
    //         path: "contacts/:contactId",
    //         element: <Contact />,
    //         loader: contactLoader,
    //         action: contactAction,
    //       },
    //       {
    //         path: "contacts/:contactId/edit",
    //         element: <EditContact />,
    //         loader: contactLoader,
    //         action: editAction,
            
    //       },
    //       {
    //         path: "contacts/:contactId/destroy",
    //         action: destroyAction,
    //         errorElement: <div>Oops! There was an error.</div>,
    //       },
    //     ],
    //   }
    // ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
