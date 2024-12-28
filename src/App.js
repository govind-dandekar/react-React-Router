import { 
  createBrowserRouter, 
  //createRoutesFromElements, 
  RouterProvider,
  //Route
   } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    // parent route wrapper of child routes
    path: '/',
    element: <RootLayout />,
    children: [
      // define path for which route should be active
      // path is part after domain
      {path: '/', element: <HomePage />},
      {path: '/products', element: <ProductsPage />}
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
