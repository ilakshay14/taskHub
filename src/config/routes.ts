import Home from "../pages/home";
import Task from "../pages/task";

export const APP_ROUTES = [
  {
    id: 1,
    path: '/',
    component: Home,
  },
  {
    id: 2,
    path: '/task/:id',
    component: Task,
  }
]