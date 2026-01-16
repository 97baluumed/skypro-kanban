import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import {
  ExitWrapper,
  ExitBlock,
  Title,
  ButtonGroup,
  Button,
} from './ExitPage.styled';

export default function ExitPage() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleConfirm = () => {
    logout();
    navigate('/login', { replace: true });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <ExitWrapper>
      <ExitBlock>
        <Title>Выйти из аккаунта?</Title>
        <ButtonGroup>
          <Button className="yes" onClick={handleConfirm}>
            Да, выйти
          </Button>
          <Button className="no" onClick={handleCancel}>
            Нет, остаться
          </Button>
        </ButtonGroup>
      </ExitBlock>
    </ExitWrapper>
  );
}