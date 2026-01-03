import { Router } from "express";
import { add, view } from "../controllers/contact.js";


const router = Router();

router.post("/add", add);
router.get("/view", view)

export default router;


