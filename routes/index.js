import e from "express"
import {userRouter} from './userRoutes.js'
import {ownerRouter} from './ownerRoutes.js'
import { adminRouter } from "./adminRoutes.js"
//import {moviesRouter} from './moviesRoutes.js'
const router = e.Router()
router.use("/user",userRouter)
router.use("/owner",ownerRouter)
router.use("/admin",adminRouter)
//router.use("/movies",moviesRouter)
//admin
//


export {router as apiRouter}