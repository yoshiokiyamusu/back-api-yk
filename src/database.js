import mysql from "mysql2/promise";
import {config as dotenv} from 'dotenv';
dotenv();

/*
const config_free_jaws = {
    host: "un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "o4ss489wi958kx63",
    password: 'jtssfqcw52r5i9kj',
    database: 'oz5sldk8ael1ojko'
};*/
const config_free_jaws = {
    host: process.env.host_db,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
};

/*
const connect = async ()=>{
    const conn = await mysql.createConnection(config);
    const result = conn.execute("Select 1+1");
    console.log(result);
};
*/
export const connect = async () => {
    //return await mysql.createConnection(config);
    const conn = await mysql.createConnection(config_free_jaws);
    //const [rows] = await conn.query("SELECT * from supplier");
    //console.log(rows);
    return conn;
};



