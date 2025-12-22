import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f1f1f1;
  padding: 20px;
`;

const SignUpForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 39px 0 rgba(26, 56, 101, 0.07);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 16px;
  border: 0.7px solid #d4dbe5;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #565eef;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: #565eef;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background: #4a51c8;
  }
`;

const Link = styled.p`
  text-align: center;
  color: #94a6be;
  font-size: 14px;

  a {
    color: #565eef;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export function SignUp({ name, setName, email, setEmail, password, setPassword, onSubmit }) {
  return (
    <SignUpWrapper>
      <SignUpForm onSubmit={onSubmit}>
        <Title>Регистрация</Title>
        <Input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Эл. почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Зарегистрироваться</Button>
        <Link>
          Уже есть аккаунт? <RouterLink to="/login">Войдите здесь</RouterLink>
        </Link>
      </SignUpForm>
    </SignUpWrapper>
  );
}