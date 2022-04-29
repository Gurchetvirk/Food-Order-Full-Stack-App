const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
var ItemsList = [
    {
      id:"1",
      Name:"Sushi",
      Description:"Finest Fish and Veggies",
      Amount:"22.99"
    },
    {
      id:"2",
      Name:"Schnitzel",
      Description:"A german speciality!",
      Amount:"16.50"
    },
    {
      id:"3",
      Name:"Barbecue Burger",
      Description:"American, raw, meaty",
      Amount:"12.99"
    },
    {
      id:"4",
      Name:"Green Bowl",
      Description:"Healthy...and green...",
      Amount:"18.99"
    },
    {
      id:"5",
      Name:"White Sauce Pasta",
      Description:"Creamy Pasta!!",
      Amount:"10.12"
    }
  ];
app.get('/items',(request,response) =>
    {
        response.send(ItemsList);
    });

app.listen(3000, () => {
    console.log("Listening through port 3000");
} );