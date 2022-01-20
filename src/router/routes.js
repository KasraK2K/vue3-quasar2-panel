const routes = [
  {
    path: "/",
    component: () => import("src/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("pages/Dashboard.vue"),
      },
    ],
  },

  {
    path: "/users",
    component: () => import("src/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "UsersList",
        component: () => import("pages/Users/List.vue"),
      },
      {
        path: "create",
        name: "CreateUser",
        component: () => import("pages/Users/Create.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("src/layouts/CleanLayout.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("pages/Auth/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("pages/Auth/Register.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
