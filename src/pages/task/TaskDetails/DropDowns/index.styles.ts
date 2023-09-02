import { styled } from "../../../../../styled-system/jsx";

export const Container = styled("div", {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '700px',
    margin: '20px 0'
  }
});

export const SelectStyles = {
  control: (provided) => ({
    ...provided,
    width: '250px',
    height: '40px',
    fontSize: '14px',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '0',
    fontSize: '14px',
  })
};

