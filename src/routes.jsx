import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "Inicio",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Perfil",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Inicio de sesión",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Inscribirse",
    path: "/sign-up",
    element: <SignUp />,
  },

];

export default routes;
