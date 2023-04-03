import { Route } from "react-router-dom"
import { Home } from "./home"



const route = [
    {
        path: '/',
        name: 'Trang chủ',
        element: <Home />
    }
]

export const getRouter = () => {
    return route.map(config => (<Route path={config.path} element={config.element}></Route>))
}