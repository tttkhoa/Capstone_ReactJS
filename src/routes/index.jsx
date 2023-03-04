import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "",
    element: lazy(() => import("../pages/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/HomeTemplate/HomePage")),
      },
      {
        path: "about",
        element: lazy(() => import("../pages/HomeTemplate/AboutPage")),
      },
      {
        path: "login",
        element: lazy(() =>
          import("../pages/HomeTemplate/LoginPage/LoginPage")
        ),
      },
      {
        path: "my-account",
        element: lazy(() =>
          import("../pages/HomeTemplate/AccountPage/AccountPage")
        ),
      },
      {
        path: "register",
        element: lazy(() =>
          import("../pages/HomeTemplate/RegisterPage/RegisterPage")
        ),
      },
      {
        path: "detail/:id",
        element: lazy(() => import("../pages/HomeTemplate/DetailMoviePage")),
      },
    ],
  },
  {
    path: "admin",
    element: lazy(() => import("../pages/AdminTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/AdminTemplate/DashboardPage")),
      },
      {
        path: "dashboard",
        element: lazy(() => import("../pages/AdminTemplate/DashboardPage")),
      },
      {
        path: "manage-user",
        element: lazy(() => import("../pages/AdminTemplate/ManageUserPage")),
      },
      {
        path: "manage-user/add-user",
        element: lazy(() =>
          import("../pages/AdminTemplate/ManageUserPage/AddUserPage/AddUser.jsx")
        ),
      },
      {
        path: "manage-user/edit-user/:id",
        element: lazy(() =>
          import("../pages/AdminTemplate/ManageUserPage/EditUserPage/EditUser.jsx")
        ),
      },
      {
        path: "manage-movie",
        element: lazy(() => import("../pages/AdminTemplate/MoviePage/ManageMoviePage")),
      },
      {
        path: "manage-movie/add-movie",
        element: lazy(() =>
          import("../pages/AdminTemplate/MoviePage/AddMoviePage/AddMovie")
        ),
      },
      {
        path: "manage-movie/edit-movie/:id",
        element: lazy(() =>
          import("../pages/AdminTemplate/MoviePage/EditMoviePage/EditMovie.jsx")
        ),
      },
      {
        path: "manage-movie/showtime/:id/:tenPhim",
        element: lazy(() =>
          import("../pages/AdminTemplate/MoviePage/ShowtimePage/index")
        ),
      },
    ],
  },
  {
    path: "auth",
    element: lazy(() => import("../pages/AdminTemplate/AuthPage")),
  },
  {
    path: "checkout/:id",
    element: lazy(() => import("../pages/CheckoutTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/CheckoutTemplate/CheckoutPage")),
      },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
