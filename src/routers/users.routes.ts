import { Router } from "express"
import userCreateController from "../controllers/userCreate.controller"
import userListController from "../controllers/userList.controller"

const userRoutes = Router()

userRoutes.post("", userCreateController)

userRoutes.get("", userListController)
userRoutes.get("/:id")

userRoutes.patch("/:id")

userRoutes.delete("/:id")

export default userRoutes
