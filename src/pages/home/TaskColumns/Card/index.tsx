import { forwardRef } from "react";
import { Task } from "../../../../types";
import { CustomLink, TaskCard, TaskContent, TaskId, TaskTitle } from "./index.styles";

const Card = forwardRef(({
  id,
  title,
  priority,
  content,
  ...rest
}: Task, ref) => {
  return (
    <CustomLink
      to={`/task/${id}`}
      {...rest}
      ref={ref}
    >
      <TaskCard
      >
        <TaskId>task #{id}</TaskId>
        <TaskTitle>{title}</TaskTitle>
        <TaskContent>
          {content}
        </TaskContent>
        {priority}
      </TaskCard>
    </CustomLink>
  );
});

export default Card;