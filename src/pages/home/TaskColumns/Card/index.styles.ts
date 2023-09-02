import { Link } from "react-router-dom";
import { styled } from "../../../../../styled-system/jsx";

export const CustomLink = styled(Link, {
  base: {
    width: '100%',
  }
})

export const TaskCard = styled("div", {
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  }
});

export const TaskId = styled("small", {
  base: {
    marginBottom: '10px',
    color: 'rgba(0, 0, 0, 0.5)',
  }
})

export const TaskTitle = styled("h3", {
  base: {
    marginBottom: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
  }
});

export const TaskContent = styled("p", {
  base: {
    marginBottom: '10px',
    fontSize: '0.875rem',
    color: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    lineClamp: 4,
  }
});