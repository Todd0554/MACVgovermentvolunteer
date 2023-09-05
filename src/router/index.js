import React from "react";

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const NewsEvents = React.lazy(() => import('../pages/NewsEvents'));
const Course = React.lazy(() => import('../pages/Course'));
const Join = React.lazy(() => import('../pages/JoinUs'));



export const router = [
    {
        path:"/",
        element: Home
    },
    {
        path:"/about",
        element: About
    },
    {
        path:"/contact",
        element: Contact
    },
    {
        path:"/course",
        element: Course
    },
    {
        path:"/newsevents",
        element: NewsEvents
    },
    {
        path:"/joinus",
        element: Join
    }

]