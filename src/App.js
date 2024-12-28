import { 
  createBrowserRouter, 
  //createRoutesFromElements, 
  RouterProvider,
  //Route
   } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage"
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    // parent route wrapper of child routes
    // absolute path starts with '/'; '/root' would conflict
    // with '/' as a child; remove leading / to make relative
    // relative paths are appended
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // define path for which route should be active
      // path is part after domain
      // index: true = parent route applies to set element
      {index: true, element: <HomePage />},
      {path: 'products', element: <ProductsPage />},
      // dynamic path segment; path params
      // :productId = any value that will be used as an actual value
      // for :productId placeholder
      {path: 'products/:productId', element: <ProductDetailPage />}
    ]
  },
  
])

// const router = createBrowserRouter(routeDefinitions);
// 1] define routes to support
// 2] activate router and load route definitions
// 3] have all components that we want to load + enable navigation
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
