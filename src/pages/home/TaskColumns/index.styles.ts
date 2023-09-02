import { Link } from "react-router-dom";
import { styled } from "../../../../styled-system/jsx";

export const Container = styled("aside", {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 300px)',
    gridGap: '24px',
  }
});

export const TasksColumn = styled("div", {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem',
    border: '2px solid rgba(99, 99, 99, 0.2)',
  }
});

export const ColumnTitle = styled("p", {
  base: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
  }
});