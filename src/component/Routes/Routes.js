import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import TrumsandCond from "../Pages/OthersTrumsAndCondition/TrumsandCond";
import Profile from "../Pages/Profile/Profile";
import Registration from "../Pages/Registration/Registration";
import PrivateRouth from "./PrivateRouth/PrivateRouth";


export const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
       {path:'/',element:<Home></Home>,
       loader:()=>fetch('https://dragon-news-server-blond-eight.vercel.app/news')
    },
       {path:'/category/:id',element:<Category></Category>,
       loader:({params})=>fetch(`https://dragon-news-server-blond-eight.vercel.app/category/${params.id}`)
    
    },

       {path:'/news/:id',element:<PrivateRouth><News></News></PrivateRouth>,
        loader:({params})=> fetch(`https://dragon-news-server-blond-eight.vercel.app/news/${params.id}`)
    },
       {path:'/login',element:<Login></Login>},
       {path:'/register',element:<Registration></Registration>},
       {path:'/terms',element:<TrumsandCond></TrumsandCond>},
       {path:'/profile',element:<PrivateRouth><Profile></Profile></PrivateRouth>}
    ]}
]) 