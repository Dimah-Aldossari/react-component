import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Pages from "../Pages";
import State from "../pages/State";
import Effect from "../pages/Effect";
import RecyMortey from "../pages/RecyMortey";
import CharacterDetails from "../pages/CharacterDetails";
import Login from "../pages/Login";
import Read from "../pages/Read";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "Pages", element: <Pages /> },
      { path: "State", element: <State /> },
      { path: "Effect", element: <Effect /> },
      { path: "RecyMortey", element: <RecyMortey /> },
      { path: "CharacterDetails/:id", element: <CharacterDetails /> },
      { path: "Login", element: <Login /> },
      { path: "Read", element: <Read /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
