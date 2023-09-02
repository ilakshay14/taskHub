import { styled } from "../../../styled-system/jsx";

export const Title = styled("p", {
  base: {
    fontSize: '2rem',
    fontWeight: 'medium',
    marginBottom: '1rem',
  }
});

export const Container = styled("div", {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
});

export const Instructions = styled("div", {
  base: {
    marginTop: '1rem',
    '& a': {
      textDecoration: 'underline',
    },
    '& ul': {
      listStyle: 'initial',
      marginLeft: '2rem',
      marginTop: '1rem',
      marginBottom: '1rem',
    }
  }
})