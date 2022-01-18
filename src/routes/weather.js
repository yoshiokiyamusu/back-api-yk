
import { Router } from "express";
import {  
     createWeatherItem,writeDateTemp, getWeatheRecords
} from "../controllers/weather";

const isAuth = require("../middleware/is-auth"); //para ponerle restriccion de token a los endpoints
const router = Router();

router.post('/writeDateTemp', writeDateTemp); //isAuth, 
router.post('/reg_weather_item', createWeatherItem);
router.get('/get_stored_weather', isAuth, getWeatheRecords);

export default router;
