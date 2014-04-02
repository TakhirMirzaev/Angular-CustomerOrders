//  $>node server.js
// Using NodeJS as the API end points for the RESTful API
var express = require('express'),
    app = express();

app.configure(function() {
    app.use(express.static(__dirname, '/'));
});

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};

    for (var j=0,len=customers.length;j<len;j++) {
        if (customers[j].id === customerId) {
           data = customers[j];
           break;
        }
    }  
    res.json(data);

});

app.get('/customers', function(req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occurred!' });
});

app.listen(8080);
console.log('Express Server is running on port 8080');

// Customer Data
var customers =  [
    {id:2, joined: '2000-12-02', name:'John', city:'Candler', orderTotal:19.9929,
        orders: [{id:2, product: 'Baseball', total:15.932}]
    },
    {id:3, joined: '2002-09-22', name:'Sam', city:'Rexdale', orderTotal:42.3329,
        orders: [{id:3, product: 'Hockey Stick', total:232.32}]
    },
    {id:32, joined: '2010-11-12', name:'Jonny', city:'Toronto', orderTotal:219.2129,
        orders: [{id:4, product: 'Beer Keg', total:121.932}, {id:2321, product: 'Gock', total:334.43}]
    },
    {id:43, joined: '2011-04-18', name:'Laura', city:'Ottawa', orderTotal:1212.32,
        orders: [{id:5, product: 'iPhone', total:12.32}, {id:3224, product: 'Horse Raddish', total:13.43}]
    },
    {id:233, joined: '2011-06-21', name:'Rick', city:'Las Vegas', orderTotal:323.32,
        orders: [{id:12, product: 'Ball Hat', total:3143.342},  {id:219, product: 'Mars Makcup', total:12.43}]
    },
    {id:2329, joined: '2008-10-19', name:'Ken', city:'Los Angelas', orderTotal:12.38,
        orders: [{id:223, product: 'Playstation', total:132.932}, {id:224, product: 'XBOX', total:134.43},  {id:124, product: 'Wii', total:114.43}]
    },
    {id:34827, joined: '2001-02-02', name:'Mike', city:'Brookdale', orderTotal:3238.32,
        orders: [{id:232, product: 'Klenex', total:4387.32}]
    }
];