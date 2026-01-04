import { useState, useContext } from 'react';
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
} from './NewCardPage.styled';
import TaskContext from '../../../context/TaskContext';

export default function NewCardPage() {
  const navigate = useNavigate();
  const { addNewTask } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const [selectedDate, setSelectedDate] = useState(`${year}-${month}-${day}`);

  const [category, setCategory] = useState('Web Design');
  const [error, setError] = useState('');

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '–';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const handleDateSelect = (dateString) => {
    if (!dateString || typeof dateString !== 'string') return;

    const match = dateString.match(/^(\d{2})\.(\d{2})\.(\d{2,4})$/);
    if (!match) return;

    const [_, day, month, yearRaw] = match;
    const year = yearRaw.length === 2 ? `20${yearRaw}` : yearRaw;
    const formatted = `${year}-${month}-${day}`;
    setSelectedDate(formatted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await addNewTask({
        title,
        description,
        topic: category,
        status: 'Без статуса',
        date: selectedDate,
      });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
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
                selectedDate={formatDate(selectedDate)}
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
    </Modal>
  );
}