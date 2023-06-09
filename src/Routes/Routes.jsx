import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import ErrorPage from '../Pages/Shared/ErrorPage/ErrorPage';
import Chefs from '../Pages/Home/Chefs/Chefs';
import ChefDetails from '../Pages/ChefDetails/ChefDetails';
import ChefLayout from '../Layouts/ChefLayout';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute';
import { lazy } from 'react';
import Loading from '../Pages/Loading/Loading';
import { Suspense } from 'react';
const Blog = lazy(() => import('../Pages/Blog/Blog'));
const About = lazy(() => import('../Pages/About/About'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/chef/',
        element: <Chefs />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '/Blog/',
        element: (
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: '/about/',
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: 'chefdetails',
    element: <ChefLayout />,
    children: [
      {
        path: ':id',
        element: (
          <PrivateRoute>
            <ChefDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tasty-traditions-server-shakibhossainmuhammad.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
