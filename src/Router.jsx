import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ListingDetailsPage from '@/components/ListingDetailsPage';
import HomePage from '@/pages/HomePage';
import ListingFavoritesPage from '@/pages/ListingFavoritesPage';
import NotFoundPage from '@/pages/NotFoundPage';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/favorites', element: <ListingFavoritesPage /> },
      {
        path: '/listings/:listingId',
        element: <ListingDetailsPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
