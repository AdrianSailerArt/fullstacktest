const Product = require("../models/producs");
const Order = require("../models/orders");

module.exports.getOrder = (params, callback) => {
  console.log(params);

  Order.findById(params)
    .exec()
    .then((document) => {
      document = { document: document, status: "200" };
      callback(document);
    })
    .catch((error) => {
      error = { document: error, status: "500" };
      callback(error);
    });
};

module.exports.getOrders = (callback) => {
  Order.find()
    .exec()
    .then((document) => {
      const response = document.map((data) => {
        return {
          data,
          meta: {
            url: "hhttp://localhost:3000/orders/getOrder/" + data._id,
          },
        };
      });

      document = { document: response, status: "200" };
      callback(document);
    })
    .catch((error) => {
      error = { document: error, status: "500" };
      callback(error);
    });
};

module.exports.addOrder = (params, callback) => {
  const helpOBJ = {};

  for (const key of Object.keys(params)) {
    Object.assign(helpOBJ, {
      [key]: params[key],
    });
  }
  Product.findById(params.product)
    .exec()
    .then((product) => {
      console.log("hello");
      if (!product) return res.status(404).json({ error: "No Product found" });

      console.log("product found", product, helpOBJ);

      const order = new Order(helpOBJ);

      return order.save().then((document) => {
        document = {
          document: document,
          status: "200",
        };

        callback(document);
      });
    })
    .catch((error) => {
      console.log("error blog");
      error = { document: error, status: "500" };
      callback(error);
    });
};
