import { Route } from "react-router-dom"
import { Home } from "./home"
import { Test } from "./test"



const route = [
    {
        path: '/',
        name: 'Trang chủ',
        element: <Home />
    },
    {
        path: '/test',
        name: 'Test',
        element: <Test />
    }
]

export const getRouter = () => {
    return route.map(config => (<Route path={config.path} element={config.element}></Route>))
}