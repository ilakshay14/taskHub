import { useFormik } from "formik";
import DropDowns from "./DropDowns";
import { Task } from "../../../types";
import { Container } from "../index.styles";
import { ValidationSchema } from "./index.util";
import {
  Actions,
  CancelButton,
  Content,
  GoBack,
  Header,
  SaveButton,
  TaskId,
  Title
} from "./index.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { createTask, updateTask } from "../../../redux/slices/tasks";

const TaskDetails = ({
  id,
  title,
  content,
  status,
  priority,
}: Task) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  console.log(pathname);

  const formik = useFormik({
    initialValues: {
      title,
      content,
      status,
      priority,
    },
    validationSchema: ValidationSchema,
    onSubmit: values => {
      if (pathname === '/newTask') {
        dispatch(createTask({
          ...values,
          id,
          commentCount: 0,
          createdAt: new Date().toISOString(),
          comments: [],
          isDeleted: false,
          isPrivate: true,
          modifiedAt: new Date().toISOString(),
          ownerId: '1',
          sharedWith: [],
        }));
      } else {
        dispatch(updateTask({
          id,
          ...values
        }));
      }

      navigate('/');
    }
  });

  const isDisabled = !formik.isValid || !formik.dirty;

  const handleOnClickCancel = () => {
    navigate('/');
  }

  return (
    <Container>
      <Header>
        <TaskId>Task #{id}</TaskId>
        <GoBack to={'/'}>Go Back</GoBack>
      </Header>
      <Title
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <DropDowns
        selectedStatus={formik.values.status}
        selectedPriority={formik.values.priority}
        onChange={formik.handleChange}
      />
      <Content
        name="content"
        value={formik.values.content}
        onChange={formik.handleChange}
      />
      <Actions>
        <CancelButton onClick={handleOnClickCancel}>Cancel</CancelButton>
        <SaveButton
          disabled={isDisabled}
          backgroundColor={isDisabled ? '#A5A9AF' : '#000'}
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
          onClick={formik.handleSubmit}
        >
          Save
        </SaveButton>
      </Actions>
    </Container>
  );
}

export default TaskDetails;