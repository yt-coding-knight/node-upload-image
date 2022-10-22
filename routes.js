import { Router } from "express";
import { Upload } from "./controller.js";

const router = Router();

router.post("/upload", Upload);

export default router;
