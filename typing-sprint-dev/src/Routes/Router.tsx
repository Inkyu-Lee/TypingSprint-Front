import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestPage from '../Page/TestPage'

const Router:React.FC = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={`/test`} element={<TestPage/>}  />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router