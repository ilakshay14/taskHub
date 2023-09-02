
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";
import { TASK_STATUS, Task } from "../../../types";
import { ColumnTitle, Container, TasksColumn } from "./index.styles";
import { useAppDispatch } from "../../../redux/hooks";
import { updateTask } from "../../../redux/slices/tasks";

type Props = {
  tasks: Task[];
}

const TASK_STATUS_MAPPED = [
  TASK_STATUS.OPEN,
  TASK_STATUS.IN_PROGRESS,
  TASK_STATUS.BLOCKED,
  TASK_STATUS.COMPLETED
]

const TaskColumns = ({
  tasks
}: Props) => {
  const dispatch = useAppDispatch();
  const handleOnDragEnd = (result: any) => {
    console.log('result === ', result);

    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const task = tasks.find(task => task.id === draggableId);
    if (!task) return;

    dispatch(updateTask({
      ...task,
      status: destination.droppableId
    }));


  }

  return (
    <Container>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {TASK_STATUS_MAPPED.map(status => {
          return (
            <Droppable droppableId={status} key={status}>
              {(provided, snapshot) => (
                <TasksColumn
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  backgroundColor={snapshot.isDraggingOver ? 'lightblue' : 'none'}
                >
                  <ColumnTitle>{status}</ColumnTitle>
                  {tasks
                    .filter(task => task.status === status)
                    .map((task, index) => (
                      <Draggable
                        draggableId={task.id}
                        key={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            userSelect={'none'}
                            {...task}
                          />
                        )
                        }
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </TasksColumn>
              )}

            </Droppable>
          )
        })}
      </DragDropContext>
    </Container>
  );
}

export default TaskColumns;