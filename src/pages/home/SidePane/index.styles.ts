import { CiViewTimeline } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { styled } from "../../../../styled-system/jsx";
import { Link } from "react-router-dom";

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
    '_lastOfType': {
      marginTop: '30px',
    }
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

export const HelpText = styled(Link, {
  base: {
    marginLeft: '0.5rem',
    cursor: 'pointer',
    color: 'rgba(0,0,0,0.7)',
  }
});

export const HelpIcon = styled(IoHelpCircleOutline, {
  base: {

  }
});