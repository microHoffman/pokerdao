import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import RouteName from "./RouteName";
import Homepage from "../pages/Homepage.vue"
import PokerTable from "../pages/PokerTable.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: RouteName.Homepage,
        component: Homepage,
    },
    {
        path: '/poker-table',
        name: RouteName.PokerTable,
        component: PokerTable,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router