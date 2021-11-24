
import {connect} from '../database.js'

export const getTasks = async (req,res)=>{
    const connection = await connect();
    const [rows] = await connection.query("SELECT * from tasks");
    //console.log(rows);
    
    res.json(rows);
    //res.send('Hello Yoshio');
};

export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    res.json(rows[0]);
};

export const getTasksCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
  res.json(rows[0]["COUNT(*)"]);
};

export const saveTask = async (req, res) => {
  try {
    const connection = await connect();
    const [results] = await connection.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [req.body.title, req.body.description]
    );
    console.log(results);

    const newUser = {
      id: results.insertId,
      ...req.body,
    };
    res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query("DELETE FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  console.log(results);

  res.sendStatus(204);
};



export const updatetask = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};