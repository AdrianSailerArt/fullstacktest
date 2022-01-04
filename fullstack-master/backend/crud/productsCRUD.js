const Product = require("../models/producs");

module.exports.getProduct = (params, callback) => {
  console.log(params);

  Product.findById(params)
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

module.exports.getProducts = (callback) => {
  Product.find()
    .exec()
    .then((document) => {
      const response = document.map((data) => {
        return {
          data,
          meta: {
            url: "hhttp://localhost:3000/products/getProduct/" + data._id,
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

module.exports.addProduct = (params, callback) => {
  const helpOBJ = {};

  for (const key of Object.keys(params)) {
    Object.assign(helpOBJ, {
      [key]: params[key],
    });
  }

  const product = new Product(helpOBJ);
  // const product = new Product({
  //   _id: new mongoose.Types.ObjectId(),
  //   name: params.name,
  //   price: params.price,
  //   created: new Date(),
  // });

  product
    .save()
    .then((document) => {
      //   console.log(document);
      document = {
        document: document,
        status: "200",
      };
      callback(document);
    })
    .catch((error) => {
      error = {
        document: error,
        status: "500",
      };
      callback(error);
    });
};
