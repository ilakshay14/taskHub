import { Link } from "react-router-dom";
import { Container, Instructions, Title } from "./index.styles";

const Help = () => {
  return (
    <Container>
      <Title>Help</Title>
      <p>Really? You need help on how to use a ToDo app?</p>
      <Instructions>
        <h3>Okay, fine whatever, here we go.</h3>
        <ul>
          <li>
            The <Link to={'/'}>home</Link> page gives you a list of all your tasks.
          </li>
          <li>
            You can click on the circle directly to the left of the task to mark it as complete.
          </li>
          <li>
            You can click on the task itself to edit it.
          </li>
          <li>
            From the left pane, you can even switch between list and column view.
          </li>
          <li>
            The column view is a bit more fun, you can drag and drop tasks between columns.
            You can also view the summary without opening it.
          </li>
        </ul>
        <small>
          That's it! What else you want? A Riddler puzzle? &nbsp;
          <Link to={'/'}>Go leave, lol!</Link>
        </small>
      </Instructions>
    </Container>
  );
}

export default Help;