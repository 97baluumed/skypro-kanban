import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cardsData } from '../../../data';
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
  ContentBlock
} from './CardPage.styled'

export default function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const card = cardsData.find(c => c.id === Number(id));

  useEffect(() => {
    if (!card) {
      navigate('/not-found', { replace: true });
    }
  }, [card, navigate]);

  if (!card) {
    return null;
  }

  const themeType = card.topic === 'Web Design' ? 'orange' :
    card.topic === 'Research' ? 'green' : 'purple';

  return (
    <Overlay>
      <ModalBlock>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <Title>{card.title}</Title>
          <ThemeTag $themeType={themeType}>{card.topic}</ThemeTag>
        </div>
        <StatusLabel>Статус</StatusLabel>
        <StatusValue>{card.status}</StatusValue>
        <GroupTextDate>
          <ContentBlock>
            <StatusText>Описание задачи</StatusText>
            <TextArea
              defaultValue={card.description || 'Описание отсутствует'}
              readOnly
            />
          </ContentBlock>
          <CalendarWrapper>
            <Calendar
              selectedDate={card.date}
              periodText="Срок исполнения:"
            />
          </CalendarWrapper>
        </GroupTextDate>
        <ButtonGroup>
          <ButtonAction>
            <Button className="edit">Редактировать задачу</Button>
            <Button className="delete">Удалить задачу</Button>
          </ButtonAction>
          <CloseButton onClick={() => window.history.back()}>
            Закрыть
          </CloseButton>
        </ButtonGroup>
      </ModalBlock>
    </Overlay>
  );
}