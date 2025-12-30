import { useState } from 'react';
import {
    HeaderWrapper,
    Container,
    HeaderBlock,
    Logo,
    Nav,
    NewTaskButton,
    UserButton,
    UserMenu,
    UserName,
    UserMail,
    ThemeToggle,
    ExitButton,
} from './Header.styled';
import { Link } from 'react-router-dom';

function getInitialUser() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        try {
            const parsed = JSON.parse(savedUser);
            return {
                name: parsed.name || 'Имя не указано',
                email: parsed.login || parsed.email || '—'
            };
        } catch (err) {
            console.error('❌ Ошибка парсинга user:', err);
            return { name: 'Ошибка', email: '—' };
        }
    }
    return { name: 'Гость', email: '—' };
}

export function Header() {
    const [user] = useState(getInitialUser);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    return (
        <HeaderWrapper>
            <Container>
                <HeaderBlock>
                    <Logo className="_show _light">
                        <a href="" target="_self">
                            <img src="images/logo.png" alt="logo" />
                        </a>
                    </Logo>
                    <Logo className="_dark">
                        <a href="" target="_self">
                            <img src="images/logo_dark.png" alt="logo" />
                        </a>
                    </Logo>
                    <Nav>
                        <NewTaskButton id="btnMainNew">
                            <Link to="/card/add" style={{ color: 'white', textDecoration: 'none' }}>
                                Создать новую задачу
                            </Link>
                        </NewTaskButton>

                        <UserButton
                            type="button"
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            aria-expanded={isUserMenuOpen}
                        >
                            {user.name}
                        </UserButton>

                        {isUserMenuOpen && (
                            <UserMenu>
                                <UserName>{user.name}</UserName>
                                <UserMail>{user.email}</UserMail>
                                <ThemeToggle>
                                    <p>Темная тема</p>
                                    <input type="checkbox" className="checkbox" name="checkbox" />
                                </ThemeToggle>
                                <ExitButton id="btnMainExit">
                                    <Link to="/exit">Выйти</Link>
                                </ExitButton>
                            </UserMenu>
                        )}
                    </Nav>
                </HeaderBlock>
            </Container>
        </HeaderWrapper>
    );
}