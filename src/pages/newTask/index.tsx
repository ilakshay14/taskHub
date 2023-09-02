import { useAppSelector } from "../../redux/hooks";
import { TASK_PRIORITY, TASK_STATUS } from "../../types";
import TaskDetails from "../task/TaskDetails";

const NewTask = () => {
  const tasks = useAppSelector(state => state.tasks);

  return (
    <TaskDetails
      id={(tasks.length + 1).toString()}
      title={''}
      content={''}
      status={TASK_STATUS.OPEN}
      priority={TASK_PRIORITY.LOW}
    />
  );
}

export default NewTask;