import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { configureStore } from 'redux'
import './index.css'
import View from './views/View'
import SecondSignUForm from './components/SecondSignUForm'
import ThirdSignUpForm from './components/ThirdSignUpForm'
import LoginForm from './components/LoginForm'
import Home from './views/Home'
import ErrorPage from "./routes/error-page"
import FirstSignUpForm from './components/FirstSignUpForm'


const router = createBrowserRouter([
  {
    path: "/",
    element: <View />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <FirstSignUpForm />,
      },
      {
        path: "/signup/2",
        element: <SecondSignUForm />,
      },
      {
        path: "/signup/3",
        element: <ThirdSignUpForm />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

