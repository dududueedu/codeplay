import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quizz from './components/Quizz'
import RenderPage from './components/PageOne'
import GameOver from './components/GameOver'

function routes() { // direciona os botões do menu principal
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Quizz/>} />
                <Route path='/codeplay' element={<RenderPage/>} />
                <Route path='/stop' element={<GameOver/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default routes;
