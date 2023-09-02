import { useAppSelector } from "../../redux/hooks";
import Task from "./Task";
import SidePane from "./SidePane";
import { TASK_STATUS } from "../../types";
import {
  Container,
  CreateButton,
  Header,
  Title,
  View
} from "./index.styles";
import TaskColumns from "./TaskColumns";


const sortTasks = (task1, task2) => {
  if (task1.status === TASK_STATUS.COMPLETED && task2.status !== TASK_STATUS.COMPLETED) {
    return 1;
  }
  if (task1.status !== TASK_STATUS.COMPLETED && task2.status === TASK_STATUS.COMPLETED) {
    return -1;
  }
  return 0;
}

const Home = () => {
  const isListView = useAppSelector(state => state.config.isListView);
  const tasks = useAppSelector(state => state.tasks);
  const tasksToRender = [ ...tasks ]

  return (
    <View>
      <SidePane />
      <Container>
        <Header>
          <Title>Tasks</Title>
          <CreateButton to={'/newTask'}>Create</CreateButton>
        </Header>

        {isListView && (
          <>
            {
              tasksToRender
                .sort(sortTasks)
                .map(task => (
                  <Task
                    key={task.id}
                    taskId={task.id}
                    title={task.title}
                    status={task.status}
                  />
                ))
            }
          </>
        )}

        {!isListView && (
          <TaskColumns
            tasks={tasksToRender}
          />
        )}
      </Container>
    </View>
  );
}

export default Home;