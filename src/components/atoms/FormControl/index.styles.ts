import { styled } from "../../../../styled-system/jsx";

export const Container = styled("div", {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }
});

export const Label = styled('label', {
  base: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  }
});

export const RequiredIcon = styled('span', {
  base: {
    color: 'red',
    marginLeft: '0.25rem',
    fontSize: '1.1rem',
  }
})
