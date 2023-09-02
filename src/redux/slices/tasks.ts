import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TASK_STATUS, Task } from "../../types";
import { DEMO_TASKS } from "../../demo-data";

export type TodoState = Task[];

const initialState = [] as TodoState;

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchTasks: () => ([
      ...DEMO_TASKS
    ]),
    markTaskAsDone: (state, action: PayloadAction<{
      taskId: string;
    }>) => ([
      ...state.map(task => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            status: TASK_STATUS.COMPLETED
          }
        }
        return task;
      })
    ]),
    updateTask: (state, action: PayloadAction<Task>) => {
      return state.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.title,
            content: action.payload.content,
            status: action.payload.status,
            priority: action.payload.priority,
          };
        }
        return task;
      });
    },
    createTask: (state, action: PayloadAction<Task>) => ([
      ...state,
      action.payload
    ])
  }
});

export const {
  fetchTasks,
  markTaskAsDone,
  updateTask,
  createTask
} = TasksSlice.actions;