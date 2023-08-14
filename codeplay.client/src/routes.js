import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quizz from './components/Quizz'
import RenderPage from './components/PageOne'
import GameOver from './components/GameOver'
import Home from './components/Home'

function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/quizz' exact element={<Quizz/>} />
                <Route path='/codeplay' element={<RenderPage/>} />
                <Route path='/stop' element={<GameOver/>} />
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default routes;
