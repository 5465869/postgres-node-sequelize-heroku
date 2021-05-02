const db = require('../config/db.config.js');
const Customer = db.customers;
 
// FETCH all Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
	  // Send all customers to Client
	  res.send(customers);
	});
};
