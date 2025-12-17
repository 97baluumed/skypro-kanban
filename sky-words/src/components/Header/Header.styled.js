import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #fff;
  padding-left: 135px;
  padding-right: 129px;
`;

export const Container = styled.div`
  /* max-width: 1200px; */
  width: 100%;
  margin: 0 auto;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
      padding: 0 10px;
`;

export const Logo = styled.div`
  &._show img {
    width: 85px;
  }
  &._dark {
    display: none;
  }
`;

export const Nav = styled.nav`
  max-width: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewTaskButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  outline: none;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
  }
`;

export const UserButton = styled.button`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  border: none;
  background: none;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin-left: 5px;
  }

  &:hover {
    color: #33399b;

    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 61px;
  right: 128px;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0 10px 39px 0 rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const UserName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const UserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: #000;
    font-size: 14px;
  }

  input[type='checkbox'] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
  }

  input[type='checkbox']::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  input:checked[type='checkbox']::before {
    left: 12px;
  }
`;

export const ExitButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;

  a {
    color: #565eef;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
    color: #fff;

    a {
      color: #fff;
    }
  }
`;
