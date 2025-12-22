import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '../../../components/Calendar/Calendar';
import {
  Modal,
  Block,
  CloseButton,
  Title,
  Form,
  InputBlock,
  Label,
  Input,
  TextArea,
  CalendarWrapper,
  CategoriesBlock,
  CategoriesLabel,
  CategoriesList,
  CategoryTag,
  CreateButton,
  GroupeText,
  GroupeTextCalendar,
  ButtonBlock
} from './NewCardPage.styled'


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