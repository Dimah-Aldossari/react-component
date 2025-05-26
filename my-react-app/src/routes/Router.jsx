import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Pages from "../Pages";
import State from "../pages/State";
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
