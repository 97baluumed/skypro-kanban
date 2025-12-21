import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';

export default function MainPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            <Main loading={loading} />
            <Outlet />
        </>
    );
}