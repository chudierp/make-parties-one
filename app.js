// Initialize express
const express = require('express')
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');


// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');

const models = require('./db/models');

// require handlebars
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const app = express()
// const db = require('db');

require('./controllers/events')(app, models);
require('./controllers/rsvps')(app, models);

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }));
// Use "main" as our default layout
app.engine('handlebars', engine({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
// Use handlebars to render
app.set('view engine', 'handlebars');


// OUR MOCK ARRAY OF PROJECTS
var events = [
    { title: "I am your first event", desc: "A great event that is super fun to look at and good", imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*" },
    { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg" },
    { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://www.washingtonian.com/wp-content/uploads/2021/09/iStock-1221173454-2048x1363.jpg" }
]
  
// INDEX
// app.get('/', (req, res) => {
//     models.Event.findAll({ order: [['createdAt', 'DESC']] }).then(events => {
//       res.render('events-index', { events: events });
//     })
//   })



// Choose a port to listen on   
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})