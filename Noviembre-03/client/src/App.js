import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewProjectPage from './pages/NewProjectPage/NewProjectPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/projects/new",
    element: <NewProjectPage />,
  },
  {
    path: "/sign_in",
    element: <h1>Project Manager Login</h1>,
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
