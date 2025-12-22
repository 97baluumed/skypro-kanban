import styled from 'styled-components';

export const Modal = styled.div`
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
export const Block = styled.div`
  background: #fff;
  max-width: 630px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 40px 30px 48px;
  position: relative;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  font-size: 24px;
  color: #94a6be;
  cursor: pointer;
  line-height: 1;
  padding: 0;

  &:hover {
    color: #000;
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin: 0 0 20px 0;
  text-align: left;
`;
export const Form = styled.form`
  display: block;
`;
export const InputBlock = styled.div`
  margin-bottom: 20px;
`;
export const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin: 0 0 8px 0;
`;
export const Input = styled.input`
  width: 100%;
  max-width: 370px;
  height: 49px;
  padding: 14px;
  border: 0.7px solid #d4dbe5;
  border-radius: 8px;
  font-size: 14px;
  color: #000;
  background: #fff;

  &:focus {
    outline: none;
    border-color: #565eef;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  max-width: 370px;
  min-height: 200px;
  padding: 14px;
  border: 0.7px solid #d4dbe5;
  border-radius: 8px;
  font-size: 14px;
  color: #000;
  background: #fff;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #565eef;
  }
`;
export const CalendarWrapper = styled.div`
  margin-bottom: 20px;

  .calendar__ttl,
  .calendar__p,
  .date-control {
    text-align: left;
  }

  .date-control {
    color: #000;
    font-weight: 500;
  }
`;
export const CategoriesBlock = styled.div`
  margin-bottom: 20px;
`;
export const CategoriesLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin: 0 0 8px 0;
`;
export const CategoriesList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
export const CategoryTag = styled.div`
  padding: 8px 14px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  user-select: none;

  color: ${props => {
        if (props.$active) return '#FF6D00';
        return props.$theme === 'orange' ? '#ee9900' :
            props.$theme === 'green' ? '#06B16E' :
                props.$theme === 'purple' ? '#9A48F1' : '#94a6be';
    }};

  background: ${props => {
        if (props.$active) return props.$theme === 'orange' ? '#FFE4C2' :
            props.$theme === 'green' ? '#06b16e' :
                props.$theme === 'purple' ? '#9a48f1' : '#94a6be';
        return props.$theme === 'orange' ? '#ffe4c2' :
            props.$theme === 'green' ? '#B4FDD1' :
                props.$theme === 'purple' ? '#E9D4FF' : '#eaeef6';
    }};
`;
export const CreateButton = styled.button`

  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 0%;
  text-align: center;
  width: 132px;
  height: 30px;
  background: #565eef;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #4a51c8;
  }
`;
export const GroupeText = styled.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
`;
export const GroupeTextCalendar = styled.div`
  display: flex;
  gap: 21px;
`;
export const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;