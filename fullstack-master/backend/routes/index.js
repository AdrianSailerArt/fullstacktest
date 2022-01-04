const express = require("express");
const router = express.Router();

const products = require("../crud/productsCRUD");

const customers = require("../crud/customersCRUD");
const orders = require("../crud/ordersCRUD");

router.get("/run", (req, res, next) => {
  const spawn = require("child_process").spawn;

  const pyProg = spawn("python", ["./script.py"]);

  pyProg.stdout.on("data", (data) => {
    console.log(data.toString());
    res.json(data);
  });
});

router.get("/:type/:name", (req, res, next) => {
  const name = req.params.name;

  const type = req.params.type;
  if (type == "products") {
    products[name]((callback) => {
      res.status(callback.status).json(callback.document);
    });
  }
  if (type == "customers") {
    customers[name](body, (callback) => {
      res.status(callback.status).json(callback.document);
    });
  }
});

router.get("/:type/:name/:id", (req, res, next) => {
  const name = req.params.name;
  const ID = req.params.id;
  const type = req.params.type;
  if (type == "products") {
    products[name](ID, (callback) => {
      res.status(callback.status).json(callback.document);
    });
  }
  if (type == "customers") {
    customers[name](body, (callback) => {
      res.status(callback.status).json(callback.document);
    });
  }
});

router.post("/:type/:name", (req, res, next) => {
  const name = req.params.name;

  const type = req.params.type;
  const body = req.body;
  if (type == "products") {
    products[name](body, (callback) => {
      res.status(callback.status).json(callback.document);
    });
  }
  if (type == "customers") {
    customers[name](body, (callback) => {
      res.status(callback.status).json(callback.document);
    });
  }
  if (type == "orders") {
    orders[name](body, (callback) => {
      res.status(callback.status).json(callback.document);
    });
  }
});

module.exports = router;
