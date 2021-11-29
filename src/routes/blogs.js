import { Router } from "express";
import {  
    getBlogs, getBlog, createBlog, deleteBlog
} from "../controllers/blogs";

const router = Router();

router.get('/blogs',getBlogs);
router.get('/blogs/:id',getBlog);
router.post('/blogs',createBlog);
router.delete('/blogs/:id',deleteBlog);


export default router;