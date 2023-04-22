import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './HomePage';
import CartPage from './CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

    children: [
      { index: true, element: <Home /> },

      {
        path: '/cart',
        element: <CartPage />,
      },

      { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
  },
]);

const Pages = () => {
  return <RouterProvider router={router} />;
};

export default Pages;
