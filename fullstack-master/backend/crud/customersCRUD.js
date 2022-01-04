const Customer = require("../models/customer");

module.exports.getCustomer = (params, callback) => {
  console.log(params);

  Customer.findById(params)
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

module.exports.getCustomers = (callback) => {
  Customer.find()
    .exec()
    .then((document) => {
      const response = document.map((data) => {
        return {
          data,
          meta: {
            url: "hhttp://localhost:3000/customers/getCustomer/" + data._id,
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

module.exports.addCustomer = (params, callback) => {
  const helpOBJ = {};

  for (const key of Object.keys(params)) {
    Object.assign(helpOBJ, { [key]: params[key] });
  }

  const customer = new Customer(helpOBJ);
  customer
    .save()
    .then((document) => {
      document = { document: document, status: "200" };
      callback(document);
    })
    .catch((error) => {
      error = { document: error, status: "500" };
      callback(error);
    });
};
