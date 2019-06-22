const path=require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');   //server->route->controller
const shopRoute = require('./routes/shop');     //server->route->controller
const errorController = require('./controllers/error'); //server->controller (routing directly to controller    )

//express app
const app = express();

//templating engine - ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//express utility - request body parsing and static file serving
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


//(main code)
//middleware
app.use('/admin', adminRoute.router);
app.use(shopRoute.router);
app.use(errorController.get404Page);

app.listen(3000);

