import { useParams } from "react-router-dom";
import TaskDetails from "./TaskDetails";
import { useAppSelector } from "../../redux/hooks";
import { Container } from "./index.styles";

const Task = () => {
  const { id } = useParams();
  const task = useAppSelector(state => state.tasks.find(task => task.id === id));

  if (!id || !task) {
    return (
      <Container>
        <p>Task not found</p>
      </Container>
    );
  }

  return (
    <TaskDetails {...task} />
  );
}

export default Task;