import { Router } from "express";
import {  
    getBlogs, getBlog, createBlog, deleteBlog
} from "../controllers/blogs";
const isAuth = require("../middleware/is-auth"); //para ponerle restriccion de token a los endpoints

const router = Router();

router.get('/blogs',isAuth,getBlogs);
router.get('/blogs/:id',getBlog);
router.post('/blogs',createBlog);
router.delete('/blogs/:id',deleteBlog);


export default router;