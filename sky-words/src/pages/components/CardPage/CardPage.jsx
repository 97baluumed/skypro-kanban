import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTaskById } from '../../../services/api';
import { AuthContext } from '../../../context/AuthContext';
import TaskContext from '../../../context/TaskContext';
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

  const { user } = useContext(AuthContext);
  const { updateTask, removeTask } = useContext(TaskContext);

  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
      if (!id || !user?.token) return;

      try {
        setLoading(true);
        const data = await fetchTaskById({ token: user.token, id });
        setCard(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCard();
  }, [id, user?.token]);

  if (loading) {
    return (
      <LoadingOverlay>
        <LoadingText>Загрузка...</LoadingText>
      </LoadingOverlay>
    );
  }

  if (error) {
    return (
      <div style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
        Ошибка: {error}
        <br />
        <button onClick={() => navigate(-1)} style={{ marginTop: '10px' }}>
          Назад
        </button>
      </div>
    );
  }

  if (!card) return null;

  const themeType = card.topic === 'Web Design' ? 'orange' :
    card.topic === 'Research' ? 'green' : 'purple';

  const handleSave = async () => {
    if (isSaving) return;
    setIsSaving(true);
    try {
      await updateTask(card._id, {
        title: card.title,
        description: card.description,
        topic: card.topic,
        status: card.status,
        date: card.date,
      });

      const freshCard = await fetchTaskById({ token: user.token, id: card._id });

      setCard(freshCard);
      setIsEditing(false);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await removeTask(card._id);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDateSelect = (dateString) => {
    if (!dateString || typeof dateString !== 'string') return;

    const match = dateString.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (!match) return;

    const [_, day, month, year] = match;
    const formatted = `${year}-${month}-${day}`;
    setCard({ ...card, date: formatted });
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
            {['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'].map((status) => (
              <StatusButton
                key={status}
                $active={card.status === status}
                onClick={() => setCard({ ...card, status })}
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
                <Button className="save" onClick={handleSave} disabled={isSaving}>
                  {isSaving ? 'Сохранение...' : 'Сохранить'}
                </Button>
                <Button className="cancel" onClick={() => setIsEditing(false)}>
                  Отменить
                </Button>
              </>
            )}
            <Button className="delete" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? 'Удаление...' : 'Удалить задачу'}
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
