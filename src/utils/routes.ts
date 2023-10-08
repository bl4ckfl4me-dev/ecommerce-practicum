import AdminPage from "../pages/AdminPage"
import AuthPage from "../pages/AuthPage"
import CartPage from "../pages/CartPage"
import HomePage from "../pages/HomePage"
import ProductPage from "../pages/ProductPage"
import UserPage from "../pages/UserPage"
import {USER_ROUTE, CART_ROUTE, ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, } from "./consts"


interface IRouteData {
    path: string,
    Component: () => JSX.Element
}

export const authRoutes: Array<IRouteData> = [
    {
        path: USER_ROUTE + '/:id',
        Component: UserPage
    },
    {
        path: CART_ROUTE,
        Component: CartPage
    }
]

export const publicRoutes: Array<IRouteData> = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    }
]