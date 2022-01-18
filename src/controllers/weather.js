import {connect} from '../database.js';
//const fetch = require("node-fetch");
const fetch = require('node-fetch');
import absoluteUrl from 'next-absolute-url';
//import fetch from 'node-fetch';
var variable_http_end = 'http://localhost:3320'; //'https://api.herokuapp.com';


export const writeDateTemp = async (req, res) => {

    var url_weather_api_free = 'https://api.openweathermap.org/data/2.5/forecast?q=bridgeport&appid=136a856c1b0889b94d1483e842ebb43b';
    
    await fetch(url_weather_api_free, {
      //headers: { Authorization: 'Bearer ' + token }
    }).then(rows => {
        return rows.json();
    }).then(data => {
      //console.log(data);
      //console.log(data.list.length);
      var n = 0;
      for (n = 0; n < data.list.length; n++) {
        /*
        console.log(data.list[n].main.temp); //data
        console.log(data.list[n].main.feels_like); 
        console.log(data.list[n].dt_txt); 
        console.log(data.list[n].weather[0].description);
        console.log(n);
        */
          //Insert tabla mysql Orden despacho         
          fetch(variable_http_end + '/weather/reg_weather_item', {
            method: "POST",
            body: JSON.stringify({
                temp_day: data.list[n].main.temp,
                feels_like: data.list[n].main.feels_like,
                date_txt: data.list[n].dt_txt
            }),
            headers: {
                "Content-Type": "application/json",
                //Authorization: "Bearer " + token,
            },
            }).then(rows => {
              //console.log(rows);
                                                  
            }).catch(err => {
            console.log(err);
            });
      }//End for

      const newBlog = {
        status: 'ok'
      };

      res.json(newBlog);
    }).catch(err => {
      console.log(err);
    });  

    
   
};

  export const createWeatherItem = async (req, res) => {
    
    try {
      const connection = await connect();
      const [results] = await connection.query(
        "INSERT INTO weather (temp_day, feels_like, date_txt) VALUES (?, ?, ?)",
        [req.body.temp_day, req.body.feels_like, req.body.date_txt]
      );
      console.log(results);
  
      const newBlog = {
        id: results.insertId,
        ...req.body,
      };
      res.json(newBlog);
    } catch (error) {
      console.error(error);
    }
    
  };

  export const getWeatheRecords = async (req,res)=>{
    const connection = await connect();
    const [rows] = await connection.query("SELECT * from weather");
    res.json(rows);
};