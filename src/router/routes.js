
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
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("pages/Index.vue"),
                name: 'home'
            },
            {
                path: 'quiz-overview',
                component: () => import('pages/Quiz/StartQuiz'),
                name: 'StartQuiz'
            },
            {
                path: 'quiz',
                component: () => import('pages/Quiz/QuizFrame'),
                name: 'quiz',
                children: [

                ]
            }
        ],
    },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
