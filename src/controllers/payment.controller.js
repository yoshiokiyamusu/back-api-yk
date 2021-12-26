import axios from "axios";
//const { check, validationResult } = require("express-validator/check");

import {
  PAYPAL_API,
  HOST,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} from "../config";

export const createOrder = async (req, res) => {
  const cart_value = req.body.valor;
  try{
    const order = {
      "intent": "CAPTURE",
      "purchase_units": [
        {
          "amount": {
            "currency_code": "USD",
            "value": cart_value
          },
          description: "Item A",
        }
      ],
      application_context: {
        brand_name: "Cocotfyma",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: `${HOST}/capture-order`,
        cancel_url: `${HOST}/cancel-payment`,
      }
    };
    
    // POST request to generate dynamic access token
    //1.format the body
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    //2. const token
    const {data} = await axios.post("https://api-m.paypal.com/v1/oauth2/token", params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );
    //console.log(data.access_token);
  
    const response = await axios.post( `${PAYPAL_API}/v2/checkout/orders`,order, { 
      headers: {
        "Authorization": `Bearer ${data.access_token}`,
      },
    });
    //console.log(response.data.links[1].href);
    res.send(response.data);
    //res.json(response.data);   

  } catch(error){
      return res.status(500).send("something went wrong");
  }

};

export const captureOrder = async (req, res) => {
  
  const { token, PayerID } = req.query;
  //console.log(token, PayerID);
  //return res.status(500).json({ message: token, pay: PayerID});

  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    console.log(response.data);

    res.redirect("/payed.html");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
  
};

export const cancelPayment = (req, res) => {
  res.redirect("/");
};