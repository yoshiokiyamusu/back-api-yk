import { Router } from "express";
import {  
    getBlogs, getBlog
} from "../controllers/blogs";

const router = Router();

router.get('/blogs',getBlogs);
router.get('/blogs/:id',getBlog);


export default router;