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

  background: ${props => (props.$editing ? '#ffffff' : 'rgba(234, 238, 246, 1)')};
  color: ${props => (props.$editing ? '#000000' : 'rgba(148, 166, 190, 1)')};

  border: ${props => (props.$editing ? '1px solid #94A6BE' : 'none')};

  &:focus {
    outline: none;
    border: 1px solid #565eef;
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
    width: 131px;
    height: 30px;
    color:  rgba(86, 94, 239, 1);
    font-family: Roboto;
    font-style: Medium;
    font-size: 13px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: -1%;
    text-align: center;
  }
    &:hover {
    background: #4a51c8;
    color: rgba(255, 255, 255, 1);
  }
    &.save {
    width: 99px;
    height: 30px;
    color: #ffffff;
    background-color: #565eef;
    border: none;
    font-family: Roboto;
    font-style: Medium;
    font-size: 14px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: 0%;
    text-align: center;

  &:hover {
    background: #4a51c8;
  }
}
    &.cancel {
      width: 93px;
      height: 30px;
      color: #565eef;
      font-family: Roboto;
      font-style: Medium;
      font-size: 14px;
      font-weight: 500;
      line-height: 10px;
      letter-spacing: -1%;
      text-align: center;

  &:hover {
    background-color: #4a51c8;
    color: #ffffff;
  }
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
export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;
export const LoadingText = styled.div`
  background: #1a1a1a;
  color: #ffffff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;
export const EditableTitle = styled.input`
  width: 370px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  color: rgba(0, 0, 0, 0.9);
  border: ${props => (props.$editing ? '1px solid #94A6BE' : 'none')};
  border-radius: 8px;
  padding: 8px 12px;
  background: #ffffff;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid #565eef;
  }
`;
export const StatusButton = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px 10px 14px;
  border-radius: 24px;
  background: #ffffff;
  color: rgba(148, 166, 190, 1);
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #565eef;
    color: rgba(255, 255, 255, 1);
  }

  ${props => props.$active && `
    color: rgba(255, 255, 255, 1);
    background: #94A6BE;
  `}

  ${props => props.$first && 'margin-right: 8px;'}
  ${props => props.$middle && 'margin-right: 8px;'}
`;
export const StatusList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 18px;
`;
export const DateInput = styled.input`
    width: 100%;
    padding: 10px 14px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    background: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    box-sizing: border-box;

  &::-webkit-calendar-picker-indicator {
    opacity: 1;
    cursor: pointer;
    filter: invert(1) brightness(0.6);
  }
  &:focus {
    outline: none;
    border-color: #565eef;
    box-shadow: 0 0 0 2px rgba(86, 94, 239, 0.2);
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;