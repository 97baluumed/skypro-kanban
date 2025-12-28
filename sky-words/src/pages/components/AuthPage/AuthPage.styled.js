import styled from 'styled-components';

export const AuthWrapper = styled.div`
    min-height: 100vh;
    background: rgba(234, 238, 246, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
`;
export const Modal = styled.div`
    width: 368px;
    height: 329px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10;
    padding: 50px 60px 50px 60px;
    box-sizing: border-box;
    border: 0.7px solid rgba(212, 219, 229, 1);
    border-radius: 10px;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    background: rgba(255, 255, 255, 1);
`;
export const Title = styled.h2`
    width: 248px;
    height: 30px;
    color: var(--Font / 90, rgba(0, 0, 0, 1));
    font-family: Roboto;
    font-style: Bold;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -3%;
    text-align: center;
    margin-bottom: 20px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 7px;
`;
export const InputWrapper = styled.div`
    position: relative;
`;
export const Input = styled.input`
    width: 248px;
    height: 30px;
    padding: 8px 10px 8px 10px;
    box-sizing: border-box;
    border: 0.7px solid rgba(212, 219, 229, 1);
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);

  &:focus {
    border-color: #565eef;
    outline: none;
    box-shadow: 0 0 0 2px rgba(86, 94, 239, 0.2);
  }

  &::placeholder {
    color: #94a6be;
  }
`;
export const Button = styled.button`
    width: 248px;
    height: 30px;
    padding: 7px 10px 8px 10px;
    background: rgba(86, 94, 239, 1);
    border: none;
    border-radius: 4px;
    color: rgba(255, 255, 255, 1);
    font-family: Roboto;
    font-style: Medium;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -1%;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;

  &:hover {
    background-color: #424ad0;
  }

  &:active {
    background-color: #3a40b5;
  }
`;
export const ErrorMessage = styled.p`
    color: #ff0000;
    font-size: 14px;
    margin: 8px 0 0;
    text-align: center;
`;
export const LinkText = styled.p`
    color: rgba(148, 166, 190, 0.4);
    font-family: Roboto;
    font-style: Regular;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: center;
    margin-top: 20px;

`;
export const Link = styled.a`
    color: rgba(148, 166, 190, 0.4);
    font-family: Roboto;
    font-style: Regular;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: center;

  &:hover {
    text-decoration: underline;
    color: #565EEF;
  }
`;
export const LinkTextUp = styled.p`
    color: rgba(148, 166, 190, 0.4);
    font-family: Roboto;
    font-style: Regular;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: center;
    margin-top: 20px;
    margin-left: 13px;
    margin-right: 12px;
`;
export const LinkUp = styled.a`
    color: rgba(148, 166, 190, 0.4);
    font-family: Roboto;
    font-style: Regular;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: center;

  &:hover {
    text-decoration: underline;
    color: #565EEF;
  }
`;
