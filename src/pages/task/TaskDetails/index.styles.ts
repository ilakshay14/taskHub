import { Link } from "react-router-dom";
import { styled } from "../../../../styled-system/jsx";

export const Header = styled("div", {
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.85rem',
    marginBottom: '1rem',
  }
})

export const TaskId = styled("small", {
  base: {
    color: '#8B8F95',
  }
});

export const GoBack = styled(Link, {
  base: {
    textDecoration: 'underline !important',
  }
})

export const Title = styled("input", {
  base: {
    fontSize: '1.5rem',
    fontWeight: 'medium',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    width: '100%',
  }
});

export const Content = styled("textarea", {
  base: {
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    minWidth: '500px',
    height: '200px',
    width: '100%',
  }
});

export const Actions = styled("div", {
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'eow',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '1rem',
  }
});

export const SaveButton = styled("button", {
  base: {
    padding: '0.8rem 4rem',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  }
})

export const CancelButton = styled("p", {
  base: {
    borderRadius: '0.5rem',
    cursor: 'pointer',
    marginRight: '30px',
  }
});