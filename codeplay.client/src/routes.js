import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quizz from './components/Quizz'
import RenderPage from './components/PageOne'

function routes() { // direciona os botões do menu principal
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Quizz/>} />
                <Route path='/codeplay' element={<RenderPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default routes;
