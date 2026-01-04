import { useNavigate } from 'react-router-dom';
import { ExitWrapper, ExitBlock, Title, ButtonGroup, Button } from './ExitPage.styled';

export default function ExitPage({ onConfirm }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    onConfirm();

    navigate('/login', { replace: true });
  };

  return (
    <ExitWrapper>
      <ExitBlock>
        <Title>Выйти из аккаунта?</Title>
        <ButtonGroup>
          <Button className="yes" onClick={handleLogout}>Да, выйти</Button>
          <Button className="no" onClick={() => navigate(-1)}>Нет, остаться</Button>
        </ButtonGroup>
      </ExitBlock>
    </ExitWrapper>
  );
}