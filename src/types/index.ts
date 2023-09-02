export enum TASK_PRIORITY {
  HIGH = 'HIGH',
  MED = 'MED',
  LOW = 'LOW'
}

export enum TASK_STATUS {
  IN_PROGRESS = 'IN_PROGRESS',
  OPEN = 'OPEN',
  COMPLETED = 'COMPLETED',
  BLOCKED = 'BLOCKED'
}

export type TaskComment = {
  id: string;
  ownerId: string;
  taskId: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  likes: number;
  unlikes: number;
  likeBy: string[];
  unlikedBy: string[];
}

export type Task = {
  id: string;
  title: string;
  listId?: string;
  content: string;
  ownerId: string;
  priority: TASK_PRIORITY;
  status: TASK_STATUS;
  createdAt: string;
  modifiedAt: string;
  isDeleted: boolean;
  isPrivate: boolean;
  sharedWith: string[];
  commentCount: number;
  comments: TaskComment[]
}

export type TaskList = {
  id: string;
  title: string;
  ownerId: string;
  tasks: Task[];
  tasksCount: number;
  createdAt: string;
  modifiedAt: string;
  isDeleted: boolean;
  isPrivate: boolean;
  sharedWith: string[];
  commentCount: number;
  comments: TaskComment[]
}

export type User = {
  id: string;
  token: string;
  email: string;
  list?: TaskList[];
  tasks?: Task[];
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  modifiedAt: string;
}