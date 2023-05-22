import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./store/store";

import App from './App';
import Home from "./pages/Home";
import MemoDetail from "./pages/MemoDetail";
import AddMemo from "./pages/AddMemo";
import EditMemo from "./pages/EditMemo";

import reportWebVitals from './reportWebVitals';
import './index.css';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: '/detail/:id', element: <MemoDetail /> },
                { path: '/add', element: <AddMemo /> },
                { path: '/edit/:id', element: <EditMemo /> },
            ]
        }
    ]
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
