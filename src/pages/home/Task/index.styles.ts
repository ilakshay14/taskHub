import { styled } from '../../../../styled-system/jsx';

export const Container = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    width: '400px',
    marginTop: '1rem',
    backgroundColor: '#FFF',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '_hover': {
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }
  }
});

export const EmptyCircle = styled('div', {
  base: {
    marginRight: '1rem',
    width: '20px',
    height: '20px',
    border: '3px solid #A056C5',
    borderRadius: '50%',
  }
});

export const Content = styled('span', {
  base: {
  }
})