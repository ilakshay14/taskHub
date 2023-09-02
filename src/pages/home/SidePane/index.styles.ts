import { CiViewTimeline } from "react-icons/ci";
import { styled } from "../../../../styled-system/jsx";

export const Container = styled("aside", {
  base: {
    width: '300px',
    position: 'absolute',
    height: '100%',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: '100px 0 0 30px'
  }
});

export const ViewSwitcher = styled("div", {
  base: {
    cursor: 'pointer',
    color: 'rgba(0,0,0,0.7)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export const ViewSwitcherText = styled("p", {
  base: {
    marginLeft: '0.5rem',
    paddingBottom: '5px',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  }
});

export const SwitcherIcon = styled(CiViewTimeline, {
  base: {

  }
});