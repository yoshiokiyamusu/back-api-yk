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