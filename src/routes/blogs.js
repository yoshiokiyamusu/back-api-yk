import { Router } from "express";
import {  
    getBlogs, getBlog, createBlog
} from "../controllers/blogs";

const router = Router();

router.get('/blogs',getBlogs);
router.get('/blogs/:id',getBlog);
router.post('/blogs',createBlog);


export default router;