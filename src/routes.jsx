import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Rewards } from './components/Rewards';
import { Tutorial } from './components/Tutorial';
import { NotFoundPage } from './components/NotFoundPage';
import { ItemSelector } from './components/AddItem';


const routes = (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/AddItem' element={<ItemSelector />} />
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
)

export default routes;
