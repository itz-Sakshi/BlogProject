import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AllPosts from './pages/AllPosts.jsx'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import Videos from './pages/Videos.jsx'
import PlayGame from './pages/PlayGame.jsx'
import PlayGameLayout from './pages/PlayGameLayout.jsx'
import Taxation from './pages/Taxation.jsx'
import Savings from "./pages/Savings.jsx"

import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Debt from './pages/Debt.jsx'

import Post from "./pages/Post";

import MyPosts from "./pages/MyPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/videos",
            element: <Videos />,
        },
        {
            path: '/play-game', // Parent route
            element: <PlayGameLayout />, // Layout component
            children: [
              {
                index: true, // Default route under /play-game
                element: <PlayGame />,
              },
              {
                path: 'debt', // Child route: /play-game/debt
                element: <Debt />,
              },
              {
                path: 'taxation', // Child route: /play-game/taxation
                element: <Taxation />,
              },
              {
                path: 'savings', // Child route: /play-game/savings
                element: <Savings />,
              },
            ],
        },
        {
            path: "/posts",
            element: <AllPosts />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/my-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <MyPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)