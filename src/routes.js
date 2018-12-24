import AC from "./components/async_load.js";

export default [
    {
        name: "首页",
        icon: "home",
        path: "/",
        component: AC(() => import("./views/home"))
    }, {
        name: "详情页",
        icon: "detail",
        path: "/detail/:id",
        component: AC(() => import("./views/movie/detail"))
    }
]