import Home from "../pages/home";
import NewTask from "../pages/newTask";
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
  },
  {
    id: 3,
    path: '/newTask',
    component: NewTask,
  }
]