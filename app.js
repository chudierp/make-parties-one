// Initialize express
const express = require('express')
const app = express()
// require handlebars
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const bodyParser = require('body-parser');
const models = require('./db/models');

const methodOverride = require('method-override')
// const { engine } = require('express-handlebars');
// INITIALIZE BODY-PARSER AND ADD IT TO APP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

require('./controllers/events')(app, models);
require('./controllers/rsvps')(app, models);

// Use "main" as our default layout
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
// Use handlebars to render
app.set('view engine', 'handlebars');

// Choose a port to listen on   
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})