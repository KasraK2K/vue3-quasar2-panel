const routes = [
  {
    path: "/",
    component: () => import("src/layouts/default-layout.vue"),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("src/pages/dashboard.vue"),
      },
    ],
  },

  {
    path: "/users",
    component: () => import("src/layouts/default-layout.vue"),
    children: [
      {
        path: "",
        name: "UsersList",
        component: () => import("src/pages/users/list.vue"),
      },
      {
        path: "create",
        name: "CreateUser",
        component: () => import("src/pages/users/create.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("src/layouts/clean-layout.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("src/pages/auth/login.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/error-404.vue"),
  },
];

export default routes;
