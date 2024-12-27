import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  // define path for which route should be active
  // path is part after domain
  {path: '/', element: <HomePage />},
])

// 1] define routes to support
// 2] activate router and load route definitions
// 3] have all components that we cwant to load + enable navigation
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
