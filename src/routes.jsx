import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Rewards } from './components/Rewards';
import { About } from './components/About';
import { NotFoundPage } from './components/NotFoundPage';
import { ItemSelector } from './components/AddItem';
import { CurrentQuestion } from './components/CurrentQuestion';

const routes = (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/about' element={<About />} />
        <Route path='/addItem' element={<ItemSelector />} />
        <Route path='/quiz' element={<CurrentQuestion />} />
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
)

export default routes;
