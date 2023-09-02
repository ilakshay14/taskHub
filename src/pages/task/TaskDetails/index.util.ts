import * as yup from 'yup';
import { TASK_PRIORITY, TASK_STATUS } from '../../../types';

export const ValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  priority: yup.mixed().oneOf([
    TASK_PRIORITY.HIGH,
    TASK_PRIORITY.LOW,
    TASK_PRIORITY.MED
  ]).required(),
  status: yup.mixed().oneOf([
    TASK_STATUS.BLOCKED,
    TASK_STATUS.COMPLETED,
    TASK_STATUS.IN_PROGRESS,
    TASK_STATUS.OPEN
  ]).required(),
});

