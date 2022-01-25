const routes = [
  {
    path: "/",
    component: () => import("layouts/DefaultLayout.vue"),
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
    component: () => import("layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "UsersList",
        component: () => import("pages/users/List.vue"),
      },
      {
        path: "create",
        name: "CreateUser",
        component: () => import("pages/users/Create.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("layouts/CleanLayout.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("pages/auth/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("pages/auth/Register.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
