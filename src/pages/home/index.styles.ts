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

export const Title = styled("p", {
  base: {
    fontSize: '2rem',
    fontWeight: 'medium',
    marginBottom: '1rem',
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

