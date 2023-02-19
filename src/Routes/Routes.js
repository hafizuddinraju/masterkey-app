import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Content from "../components/Content/Content";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../layout/Main";
 // all routes setup
export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
children:[
    {path:'/', element:<Content></Content>},
    {path:'/contact', element:<Contact></Contact>}

]

}
])