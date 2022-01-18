const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//const User = require('../models/user');
import {connect} from '../database.js'


exports.login = async (req, res, next) => {
  const connection = await connect();
  const user_name = req.body.user_name;
  const password = req.body.password;
  let loadedUser;

  //Evaluar si existe ese input mail en la DB(Mysql)
  let $var_sql = "SELECT COUNT(*) as 'count' FROM users WHERE users = '" + user_name + "' ";
  //console.log($var_sql);
  const [rows] = await connection.query($var_sql);
  let contador = parseInt(rows[0].count);
  console.log(contador);
  if(contador < 1){
    res.status(401).json({"message": "Credenciales erradas"});
  } else{
    
      const token = jwt.sign(
        {email: user_name,},
        "somesuperyoshiosecretpassword",
        { expiresIn: "1h" } //en una hora muere la session token
      );
      console.log(token);
      res.status(200).json({ token: token });
  } 

};
