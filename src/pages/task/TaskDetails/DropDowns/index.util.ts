import { TASK_PRIORITY, TASK_STATUS } from "../../../../types";

export const STATUS_OPTIONS = [
  {
    label: TASK_STATUS.OPEN,
    value: TASK_STATUS.OPEN,
  },
  {
    label: TASK_STATUS.IN_PROGRESS,
    value: TASK_STATUS.IN_PROGRESS,
  },
  {
    label: TASK_STATUS.COMPLETED,
    value: TASK_STATUS.COMPLETED,
  },
];

export const PRIORITY_OPTIONS = [
  {
    label: TASK_PRIORITY.HIGH,
    value: TASK_PRIORITY.HIGH,
  },
  {
    label: TASK_PRIORITY.MED,
    value: TASK_PRIORITY.MED,
  },
  {
    label: TASK_PRIORITY.LOW,
    value: TASK_PRIORITY.LOW,
  },
]

export const getSelectedStatus = (status: string) => STATUS_OPTIONS.find(option => option.value === status);
export const getSelectedPriority = (priority: string) => PRIORITY_OPTIONS.find(option => option.value === priority);