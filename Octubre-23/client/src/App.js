import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PlanetPage from "./pages/PlanetPage/PlanetPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: () => "",
  },
  {
    path: "/:id",
    element: <PlanetPage />,
    loader: () => "",
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
