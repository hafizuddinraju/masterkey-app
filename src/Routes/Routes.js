import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Content from "../components/Content/Content";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,
children:[
    {path:'/', element:<Content></Content>},
    {path:'/contact', element:<Contact></Contact>}

]

}
])