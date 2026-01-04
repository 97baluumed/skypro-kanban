import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTaskById } from '../../../services/api';
import TaskContext from "../../../context/TaskContext";
import { Calendar } from '../../../components/Calendar/Calendar';
import {
  Overlay,
  ModalBlock,
  Title,
  ThemeTag,
  StatusLabel,
  StatusValue,
  TextArea,
  StatusText,
  CalendarWrapper,
  ButtonGroup,
  ButtonAction,
  Button,
  CloseButton,
  GroupTextDate,
  ContentBlock,
  LoadingOverlay,
  LoadingText,
  EditableTitle,
  StatusButton,
  StatusList
} from './CardPage.styled';

export default function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const { updateTask, removeTask } = useContext(TaskContext);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '–';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  useEffect(() => {
    const loadCard = async () => {
      try {
        const data = await fetchTaskById({
          token: localStorage.getItem('token'),
          id,
        });
        setCard(data);
      } catch (err) {
        console.error('❌ Ошибка загрузки карточки:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCard();
  }, [id]);

  if (loading) {
    return (
      <LoadingOverlay>
        <LoadingText>Загрузка...</LoadingText>
      </LoadingOverlay>
    );
  }
  if (error) return (
    <div style={{ color: 'red', padding: '20px' }}>
      Ошибка: {error}
      <br />
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
  if (!card) return null;

  const themeType = card.topic === 'Web Design' ? 'orange' :
    card.topic === 'Research' ? 'green' : 'purple';

  const handleSave = async () => {
    try {
      await updateTask(card._id, {
        title: card.title,
        description: card.description,
        topic: card.topic,
        status: card.status,
        date: card.date,
      });
      setIsEditing(false);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await removeTask(card._id);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDateSelect = (dateString) => {
    if (!dateString || typeof dateString !== 'string') {
      console.error('❌ Неверный формат даты:', dateString);
      return;
    }

    let date;

    const shortYearRegex = /^(\d{2})\.(\d{2})\.(\d{2})$/;
    const longYearRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;

    const shortMatch = dateString.match(shortYearRegex);
    const longMatch = dateString.match(longYearRegex);

    if (longMatch) {
      const day = longMatch[1];
      const month = longMatch[2];
      const year = longMatch[3];
      date = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    } else if (shortMatch) {
      const day = shortMatch[1];
      const month = shortMatch[2];
      const year = '20' + shortMatch[3];
      date = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    } else {
      date = new Date(`${dateString}T00:00:00.000Z`);
    }

    if (isNaN(date.getTime())) {
      console.error('❌ Невозможно распознать дату:', dateString);
      return;
    }

    setCard({ ...card, date: date.toISOString() });
  };


  return (
    <Overlay>
      <ModalBlock>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          {isEditing ? (
            <EditableTitle
              type="text"
              value={card.title}
              onChange={(e) => setCard({ ...card, title: e.target.value })}
              $editing={isEditing}
              autoFocus
            />
          ) : (
            <Title>{card.title}</Title>
          )}
          <ThemeTag $themeType={themeType}>{card.topic}</ThemeTag>
        </div>
        <StatusLabel>Статус</StatusLabel>
        {isEditing ? (
          <StatusList>
            {['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'].map((status, index) => (
              <StatusButton
                key={status}
                $active={card.status === status}
                onClick={() => setCard({ ...card, status })}
                $first={index === 0}
                $middle={index > 0 && index < 4}
              >
                {status}
              </StatusButton>
            ))}
          </StatusList>
        ) : (
          <StatusValue>{card.status}</StatusValue>
        )}
        <GroupTextDate>
          <ContentBlock>
            <StatusText>Описание задачи</StatusText>
            <TextArea
              value={card.description}
              onChange={(e) => setCard({ ...card, description: e.target.value })}
              $editing={isEditing}
              readOnly={!isEditing}
            />
          </ContentBlock>
          <CalendarWrapper>
            {isEditing ? (
              <Calendar
                selectedDate={formatDate(card.date)}
                periodText="Срок исполнения:"
                onDateSelect={handleDateSelect}
              />
            ) : (
              <Calendar
                selectedDate={formatDate(card.date)}
                periodText="Срок исполнения:"
              />
            )}
          </CalendarWrapper>
        </GroupTextDate>
        <ButtonGroup>
          <ButtonAction>
            {!isEditing ? (
              <Button className="edit" onClick={() => setIsEditing(true)}>
                Редактировать задачу
              </Button>
            ) : (
              <>
                <Button className="save" onClick={handleSave}>
                  Сохранить
                </Button>
                <Button
                  className="cancel"
                  onClick={() => setIsEditing(false)}
                >
                  Отменить
                </Button>
              </>
            )}
            <Button className="delete" onClick={handleDelete}>
              Удалить задачу
            </Button>
          </ButtonAction>
          <CloseButton onClick={() => navigate(-1)}>
            Закрыть
          </CloseButton>
        </ButtonGroup>
      </ModalBlock>
    </Overlay>
  );
}
