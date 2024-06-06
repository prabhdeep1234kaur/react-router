import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComponentRouter from "./components/ComponentRouter";
import AboutComponent from "./components/AboutComponent.tsx";
import LoginComponent from "./components/LoginComponent.tsx";
import User from "./components/User.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ComponentRouter />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <ComponentRouter />
          <AboutComponent />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <ComponentRouter />
          <LoginComponent />
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <ComponentRouter />
          <User />
        </>
      ),
    },
  ]);
  return (
    <>
      <div></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
