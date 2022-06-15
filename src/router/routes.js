const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('pages/login')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('pages/register')
    },

    {
        path: "/",
        meta: {requireAuth: true},
        component: () => import("layouts/MainLayout.vue"),
        children: [{path: "", component: () => import("pages/Index.vue")}],
    },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
