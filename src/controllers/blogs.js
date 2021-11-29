import {connect} from '../database.js'

export const getBlogs = async (req,res)=>{
    const connection = await connect();
    const [rows] = await connection.query("SELECT * from blogs");
    //console.log(rows);
    res.json(rows);
    //res.json(rows);
    //res.send('Hello Yoshio');
};


export const getBlog = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM blogs WHERE id = ?", [
      req.params.id,
    ]);
    res.json(rows[0]);
};

export const createBlog = async (req, res) => {
  try {
    const connection = await connect();
    const [results] = await connection.query(
      "INSERT INTO blogs (title, body, author) VALUES (?, ?, ?)",
      [req.body.title, req.body.body, req.body.author]
    );
    //console.log(results);

    const newBlog = {
      id: results.insertId,
      ...req.body,
    };
    res.json(newBlog);
  } catch (error) {
    console.error(error);
  }
};