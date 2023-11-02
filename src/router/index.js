import React from "react";

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const NewsEvents = React.lazy(() => import('../pages/NewsEvents'));
const Course = React.lazy(() => import('../pages/Course'));
const Gallery = React.lazy(() => import('../pages/Gallery'));
const Partnerships = React.lazy(() => import('../pages/Partnerships'));



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
        path:"/course/courseselect",
        element: Course
    },
    {
        path:"/newsevents",
        element: NewsEvents
    },
    {
        path:"/gallery",
        element: Gallery
    },
    {
        path:"/partnerships",
        element: Partnerships
    }

]