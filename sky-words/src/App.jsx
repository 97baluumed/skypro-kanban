import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { PopNewCard } from './components/PopNewCard/PopNewCard';
import { PopBrowse } from './components/PopBrowse/PopBrowse';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </div>
    </>
  );
}
