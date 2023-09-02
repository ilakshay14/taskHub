import { TASK_PRIORITY, TASK_STATUS, Task, } from "../types/";

const randomId = function (length = 6) {
  return Math.random().toString(36).substring(2, length + 2);
};

const ownerId = randomId();
const listId = randomId();


export const DEMO_TASKS: Task[] = new Array(7).fill('hello').map((_, index) => ({
  id: index.toString(),
  title: `Task-title-${index}`,
  content: `Task-content-${index}`,
  ownerId,
  listId,
  priority: TASK_PRIORITY.HIGH,
  status: TASK_STATUS.OPEN,
  createdAt: new Date().toLocaleDateString().toString(),
  modifiedAt: new Date().toLocaleDateString().toString(),
  isDeleted: false,
  isPrivate: true,
  sharedWith: [],
  commentCount: 0,
  comments: []
}));

DEMO_TASKS[ 2 ].priority = TASK_PRIORITY.MED;
DEMO_TASKS[ 3 ].priority = TASK_PRIORITY.LOW

export const DEMO_TASK_LIST = [
  {
    id: listId,
    title: 'Default ToDo',
    ownerId: "io4zvl",
    tasks: DEMO_TASKS,
    tasksCount: DEMO_TASKS.length,
    createdAt: new Date().toLocaleDateString().toString(),
    modifiedAt: new Date().toLocaleDateString().toString(),
    isDeleted: false,
    isPrivate: true,
    sharedWith: [],
    commentCount: 0,
    comments: [],
  }
]