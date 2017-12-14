simpleCart({
	checkout: { 
		type: "PayPal" , 
		email: "seanskiver@gmail.com" 
	},

	cartColumns: [
		{ attr: "name" , label: "Name" },
		{ attr: "price" , label: "Price", view: 'currency' },
		{ view: "decrement" , label: false },
		{ attr: "quantity" , label: "Qty" },
		{ view: "increment" , label: false },
		{ attr: "total" , label: "SubTotal", view: 'currency' },
		{ view: "remove" , text: "Remove" , label: false }
	],

	cartStyle: "table"
});



