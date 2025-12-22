import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 20px;
`;
export const ModalBlock = styled.div`
  box-sizing: border-box;
  border: 0.7px solid var(--stroke light, rgba(212, 219, 229, 1));
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  gap: 18;
  padding: 40px 30px 48px 30px;
`;
export const Title = styled.h3`
  width: 163px;
  height: 23px;
  color: var(--Black / 90, rgba(0, 0, 0, 1));
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;
export const ThemeTag = styled.div`
  width: 115px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  background: var(--Orange / 20, rgba(255, 228, 194, 1));
  font-size: 14px;
  font-weight: 500;
  line-height: 14.21px;
  letter-spacing: 0%;
  text-align: center;
  color: ${props => {
        if (props.$themeType === 'orange') return '#ee9900';
        if (props.$themeType === 'green') return '#06b16e';
        if (props.$themeType === 'purple') return '#9a48f1';
        return '#94a6be';
    }};
  background: ${props => {
        if (props.$themeType === 'orange') return '#ffe4c2';
        if (props.$themeType === 'green') return '#b4fdd1';
        if (props.$themeType === 'purple') return '#e9d4ff';
        return '#eaeef6';
    }};
`;
export const StatusLabel = styled.p`
width: 45px;
height: 16px;
color: var(--Black / 90, rgba(0, 0, 0, 1));
font-family: Roboto;
font-size: 14px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0px;
text-align: left;
margin-bottom: 14px;
`;
export const StatusValue = styled.div`
width: 136px;
height: 30px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px 14px 10px 14px;
border-radius: 24px;
background: rgba(148, 166, 190, 1);
color: rgba(255, 255, 255, 1);
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 10px;
letter-spacing: 0%;
text-align: center;
margin-bottom: 18px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  max-width: 370px;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 14;
  padding: 14px;
  border-radius: 8px;
  background: rgba(234, 238, 246, 1);
  color: rgba(148, 166, 190, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  border: none;
  &:focus {
    outline: none;
    border-color: #565eef;
  }
`;
export const StatusText = styled.p`
  width: 115px;
  height: 16px;
  color: var(--Black / 90, rgba(0, 0, 0, 1));
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 14px;
`;
export const CalendarWrapper = styled.div`
  .calendar__ttl,
  .calendar__p,
  .date-control {
    text-align: left !important;
    text-align: start;
  }
  .calendar__period {
    margin-top: 10px;
  }
  .date-control {
    color: #000;
    font-weight: 500;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 169px;
`;
export const ButtonAction = styled.div`
  display: flex;
  gap: 8px;
`;
export const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 14px 10px 14px;
    box-sizing: border-box;
    border: 0.7px solid rgba(86, 94, 239, 1);
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0);
  &.edit {
    color: rgba(86, 94, 239, 1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: -1%;
    text-align: center;
  }

  &.delete {
    color:  rgba(86, 94, 239, 1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: -1%;
    text-align: center;
  }
    &:hover {
    background: #4a51c8;
    color: rgba(255, 255, 255, 1);
  }
`;
export const CloseButton = styled.button`
  width: 86px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 14px 10px 14px;
  cursor: pointer;
  border-radius: 4px;
  border: 0.7px solid rgba(86, 94, 239, 1);
  background-color: rgba(0, 0, 0, 0);
  color: rgba(86, 94, 239, 1);

  &:hover {
    background: #4a51c8;
    color: rgba(255, 255, 255, 1);
  }
`;
export const GroupTextDate = styled.button`
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  justify-content: space-between;
`;
export const ContentBlock = styled.div`
  flex: 1;
`;