import { HeaderBar, LogoLink, LogoImage, PageWrapper, Title, Text, HomeLink } from './NotFoundPage.styled'

export default function NotFoundPage() {
  return (
    <>
      <HeaderBar>
        <LogoLink to="/">
          <LogoImage src="./images/logo_dark.png" alt="logo" />
        </LogoLink>
      </HeaderBar>

      <PageWrapper>
        <Title>404</Title>
        <Text>Страница не найдена</Text>
        <HomeLink to="/">На главную</HomeLink>
      </PageWrapper>
    </>
  );
}