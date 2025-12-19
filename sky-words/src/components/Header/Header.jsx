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

export function Header() {
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
                            <a href="#popNewCard">Создать новую задачу</a>
                        </NewTaskButton>

                        <UserButton
                            type="button"
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            aria-expanded={isUserMenuOpen}
                        >
                            Ivan Ivanov
                        </UserButton>

                        {isUserMenuOpen && (
                            <UserMenu>
                                <UserName>Ivan Ivanov</UserName>
                                <UserMail>ivan.ivanov@gmail.com</UserMail>
                                <ThemeToggle>
                                    <p>Темная тема</p>
                                    <input type="checkbox" className="checkbox" name="checkbox" />
                                </ThemeToggle>
                                <ExitButton>
                                    <a href="#popExit">Выйти</a>
                                </ExitButton>
                            </UserMenu>
                        )}
                    </Nav>
                </HeaderBlock>
            </Container>
        </HeaderWrapper>
    );
}