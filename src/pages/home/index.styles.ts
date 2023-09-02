import { Link } from "react-router-dom";
import { styled } from "../../../styled-system/jsx";

export const Container = styled("div", {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '300px',
  }
});

export const Header = styled("div", {
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  }
});

export const Title = styled("p", {
  base: {
    fontSize: '2rem',
    fontWeight: 'medium',
  }
});

export const View = styled("div", {
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export const CreateButton = styled(Link, {
  base: {
    padding: '0.8rem 3rem',
    backgroundColor: '#000',
    color: '#fff !important',
    borderRadius: '5px',
    cursor: 'pointer',
  }
})