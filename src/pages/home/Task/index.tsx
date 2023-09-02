import { Link } from "react-router-dom";
import { Container, EmptyCircle, Content } from "./index.styles";
import { TASK_STATUS } from "../../../types";
import { useAppDispatch } from "../../../redux/hooks";
import { markTaskAsDone } from "../../../redux/slices/tasks";

type Props = {
  taskId: string;
  title: string;
  status: TASK_STATUS;
}

const Task = ({
  taskId,
  title,
  status
}: Props) => {
  const dispatch = useAppDispatch();

  const handleOnClickMarkAsCompleted = (e) => {
    e.preventDefault();
    dispatch(markTaskAsDone({
      taskId
    }));
  }

  return (
    <Link to={`/task/${taskId}`}>
      <Container>
        <EmptyCircle
          backgroundColor={status === TASK_STATUS.COMPLETED ? '#A056C5' : 'transparent'}
          onClick={(e) => handleOnClickMarkAsCompleted(e)}
        />
        <Content
          textDecoration={status === TASK_STATUS.COMPLETED ? 'line-through' : 'none'}
        >{title}</Content>
      </Container>
    </Link>
  );
}

export default Task;