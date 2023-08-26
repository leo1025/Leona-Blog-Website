import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import Blog from "@/views/Blog.vue"
import Work from "@/views/Work.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
    },
    {
        path: "/work",
        name: "Work",
        component: Work,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router