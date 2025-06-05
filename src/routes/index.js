import { tickets } from "./tickets.js";
import { parseRouterPath } from "../utils/parseRoutePath.js"

export const routes = [...tickets].map((route) => ({
    ...route,
    path: parseRouterPath(route.path),
}))