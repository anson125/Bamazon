var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 8889,

	user: 'root',

	password: '',
	database: 'bamazon'
});

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole number.';
	}
}

function promptUserPurchase() {
inquirer.prompt([
{
    type: 'input',
    name: 'item_id',
    message: 'Enter the Item ID that you would like to purchase.',
    validate: validateInput,
    filter: Number
},
{
    type: 'input',
    name: 'quantity',
    message: 'How many?',
    validate: validateInput,
    filter: Number
}
]).then(function(input) {

var item = input.item_id;
var quantity = input.quantity;

var queryStr = 'SELECT * FROM products WHERE ?';

connection.query(queryStr, {item_id: item}, function(err, data) {
    if (err) throw err;

    if (data.length === 0) {
        console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
        displayInventory();

    } else {
        var productData = data[0];

        if (quantity <= productData.stock_quantity) {
            console.log('The product that you requested is in stock! Your order is being placed!');

            var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

            connection.query(updateQueryStr, function(err, data) {
                if (err) throw err;

                console.log('Your oder has been placed. Your total is $' + productData.price * quantity);
                console.log('Thank you for shopping with us!');
                console.log("\n-----------------------------------------\n");

                connection.end();
            })
        } else {
            console.log('Insufficient quantity!');
            console.log("\n-----------------------------------------\n");

            displayInventory();
        }
    }
})
})
}

function displayInventory() {

queryStr = 'SELECT * FROM products';

connection.query(queryStr, function(err, data) {
    if (err) throw err;

    console.log('Existing Inventory: ');
    console.log('...................\n');

    var info = '';
    for (var i = 0; i < data.length; i++) {
        info = '';
        info += 'Item ID: ' + data[i].item_id + '  //  ';
        info += 'Product Name: ' + data[i].product_name + '  //  ';
        info += 'Department: ' + data[i].department_name + '  //  ';
        info += 'Price: $' + data[i].price + '\n';

        console.log(info);
    }

    console.log("---------------------------------------------------------------------\n");

    promptUserPurchase();
})
}

function runBamazon() {

displayInventory();
}

runBamazon();