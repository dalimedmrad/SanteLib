const express = require("express");
const router = express.Router();
const request = require("request");

router.post("/gettokensms", async (req, res) => {
  const headers = {
    Authorization:
      "Basic aUdjUzNyMHUzeFBWeXd6cG1LaXU1NUJvUkdUNVFRRWE6Tnc2Ukx5U2ljRnFFZGFHYw==",
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };
  var dataString = "grant_type=client_credentials";

  var options = {
    url: "https://api.orange.com/oauth/v3/token",
    method: "POST",
    headers: headers,
    body: dataString,
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body);
      res.send({ token: JSON.parse(body)});
    } else {
      // console.log(error);
    }
  }
  request(options, callback);
});
router.post("/sms", async (req, res) => {
  const {address, token, message } = req.body;
  // console.log(address, token, message);
  // const headers = {
  //   Authorization: "Bearer PLAw7lbk8rLMc0dGguL7Li6Gehd9",
  //   "Content-Type": "application/json",
  // };

  // var dataString =
  // '{"outboundSMSMessageRequest":{"address": "tel:+21627914561", "senderAddress":"tel:+21656812", "outboundSMSTextMessage":{"message": "Hello World !"}}}'

  // var options = {
  //   url: "https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B{{+21656813222}}/requests",
  //   method: "POST",
  //   headers: headers,
  //   body: dataString,
  // };

  // function callback(error, response, body) {
  //   console.log(body);
  //   console.log(error);
  //   console.log(response);
  //   if (!error && response.statusCode == 200) {
  //     console.log(body);
  //     // res.send().json(response);
  //   }
  //   if (error) {
  //     console.log(error);
  //     res.send().json(error);
  //   }
  // }
  // request(options, callback);
  var headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  var dataString =
    `{"outboundSMSMessageRequest":{"address": "tel:${address}","senderAddress":"tel:+21656813222","outboundSMSTextMessage":{"message": "${message}"}}}`;

  var options = {
    url: "https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B21656813222/requests",
    method: "POST",
    headers: headers,
    body: dataString,
  };

  function callback(error, response, body) {
    // if (!error && response.statusCode == 200) {
    //   console.log(response);
    // }
    // console.log(body)
    // console.log(response)
    // console.log(error)
  }

  request(options, callback);
});

module.exports = router;
