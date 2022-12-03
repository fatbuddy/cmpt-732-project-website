const express = require('express')
var config = require("./config.js");
const mysql = require("mysql2");
const fs = require("fs");
const https = require("https");
const app = express()
const port = 3000

const pool = mysql.createPool({
  host: config.MYSQL.HOST,
  user: config.MYSQL.USER,
  password: config.MYSQL.PASSWORD,
  database: config.MYSQL.DATABASE,
  waitForConnections: true,
});

//load model
const Collision = require("./models/Collision");
const Categories = require('./models/Categories');
const CategoryTime = require('./models/CategoryTime');
const CategoryRegionTime = require('./models/CategoryRegionTime');
const CategoryRegion = require('./models/CategoryRegion');


app.use(express.static('public'))
app.use(express.json());
app.get("/collisions", (req, res) => {
  Collision.findAll(pool, req.query.frequency, req.query.city_id, req.query.county_id, req.query.start, req.query.end, (err, result) => {
    if (err) {
      res.send({ success: false, payload: err });
    } else {
      res.send({ success: true, payload: result });
    }
  });
});

app.get("/categories", (req, res) => {
  Categories.findAll(pool, req.query.category_name,(err, result) => {
    if (err) {
      res.send({ success: false, payload: err });
    } else {
      res.send({ success: true, payload: result });
    }
  });
});

app.get("/categoryTime", (req, res) => {
  CategoryTime.findAll(pool, req.query.category_name,req.query.start_date, req.query.end_date,(err, result) => {
    if (err) {
      res.send({ success: false, payload: err });
    } else {
      res.send({ success: true, payload: result });
    }
  });
});

app.get("/categoryRegionTime", (req, res) => {
  CategoryRegionTime.findAll(pool, req.query.category_name,req.query.county_id, req.query.city_id, (err, result) => {
    if (err) {
      res.send({ success: false, payload: err });
    } else {
      res.send({ success: true, payload: result });
    }
  });
});

app.get("/categoryRegion", (req, res) => {
  CategoryRegion.findAll(pool, req.query.category_name,req.query.county_id, req.query.city_id, (err, result) => {
    if (err) {
      res.send({ success: false, payload: err });
    } else {
      res.send({ success: true, payload: result });
    }
  });
});

if (config.SSL.ENABLED) {
  var privateKey = fs.readFileSync(config.SSL.KEYPATH);
  var certificate = fs.readFileSync(config.SSL.CERTPATH);
  https
    .createServer(
      {
        key: privateKey,
        cert: certificate,
      },
      app
    )
    .listen(443);
} else {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
