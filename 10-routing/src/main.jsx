import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/index.jsx";
import ErrorPage from "./routes/error-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/app",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
