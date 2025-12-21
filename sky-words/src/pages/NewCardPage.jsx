import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '../components/Calendar/Calendar';
import styled from 'styled-components';

const Modal = styled.div`
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

const Block = styled.div`
  background: #fff;
  max-width: 630px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 40px 30px 48px;
  position: relative;
`;

const CloseButton = styled.button`
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

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin: 0 0 20px 0;
  text-align: left;
`;

const Form = styled.form`
  display: block;
`;

const InputBlock = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin: 0 0 8px 0;
`;

const Input = styled.input`
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

const TextArea = styled.textarea`
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

const CalendarWrapper = styled.div`
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

const CategoriesBlock = styled.div`
  margin-bottom: 20px;
`;

const CategoriesLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin: 0 0 8px 0;
`;

const CategoriesList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const CategoryTag = styled.div`
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

const CreateButton = styled.button`

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
const GroupeText = styled.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
`;

const GroupeTextCalendar = styled.div`
  display: flex;
  gap: 21px;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function NewCardPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('30.10.23');
  const [category, setCategory] = useState('Web Design');

  const handleDateSelect = (dateString) => {
    setSelectedDate(dateString);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    console.log('Новая задача:', { title, description, category, date: selectedDate });

    navigate(-1);
  };

  const categories = [
    { name: 'Web Design', theme: 'orange' },
    { name: 'Research', theme: 'green' },
    { name: 'Copywriting', theme: 'purple' }
  ];

  return (
    <Modal>
      <Block>
        <CloseButton onClick={() => navigate(-1)}>&#10006;</CloseButton>
        <Title>Создание задачи</Title>
        <Form onSubmit={handleCreate}>
          <GroupeTextCalendar>
            <GroupeText>
              <InputBlock>
                <Label>Название задачи</Label>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите название задачи..."
                  autoFocus
                />
              </InputBlock>
              <InputBlock>
                <Label>Описание задачи</Label>
                <TextArea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Введите описание задачи..."
                />
              </InputBlock>
            </GroupeText>
            <CalendarWrapper>
              <Calendar
                selectedDate={selectedDate}
                periodText="Срок исполнения:"
                onDateSelect={handleDateSelect}
              />
            </CalendarWrapper>
          </GroupeTextCalendar>
          <CategoriesBlock>
            <CategoriesLabel>Категория</CategoriesLabel>
            <CategoriesList>
              {categories.map(({ name, theme }) => (
                <CategoryTag
                  key={name}
                  $theme={theme}
                  $active={category === name}
                  onClick={() => setCategory(name)}
                >
                  {name}
                </CategoryTag>
              ))}
            </CategoriesList>
          </CategoriesBlock>
          <ButtonBlock>
            <CreateButton type="submit">Создать задачу</CreateButton>
          </ButtonBlock>
        </Form>
      </Block>
    </Modal >
  );
}