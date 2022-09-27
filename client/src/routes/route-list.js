import { Login, SignUp, Profile, Boards, Board, Home } from "pages";

export const routes = [
  {
    path: "/",
  },
  // {
  //   path: "/home",
  //   component: Home
  // },
  {
    path: "/boards",
    component: Boards,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/board/:id",
    component: Board,
  },
];
