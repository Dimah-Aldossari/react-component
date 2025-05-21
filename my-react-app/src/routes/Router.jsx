import { createBrowserRouter, RouterProvider } from "react-router";
// import Nav from "../component/Nav";
// import Footer from "../component/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);
function Router() {
  return (
    <>
      {/* <Nav /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}
export default Router;
