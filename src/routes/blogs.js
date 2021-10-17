import { Router } from "express";
import {  
    getBlogs
} from "../controllers/blogs";

const router = Router();

router.get('/blogs',getBlogs);

export default router;