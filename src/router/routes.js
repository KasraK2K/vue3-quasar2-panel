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
    component: () => import("layouts/CleanLayout.vue"),
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
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
