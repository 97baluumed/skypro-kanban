import { Outlet } from 'react-router-dom';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';

export default function MainPage() {

    return (
        <>
            <Header />
            <Main />
            <Outlet />
        </>
    );
}