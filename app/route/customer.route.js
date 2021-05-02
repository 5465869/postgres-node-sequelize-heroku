module.exports = function(app) { 
    const customers = require('../controller/customer.controller.js');

    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
}