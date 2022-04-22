// auth.js controller
const jwt = require('jsonwebtoken');

function generateJWT(user) {
    const mpJWT = jwt.sign({ id: user.id }, "AUTH-SECRET", { expiresIn: 60*60*24*60 });
  
    return mpJWT
}

module.exports = (app, models) => {
    
   
    // LOG IN
    app.get('/login', (req, res) => {
        res.render('events-login');
    })

    // CREATE LOGIN
    // auth.js 

// LOGIN (POST)
    app.post('/login', (req, res, next) => {
        // look up user with email
        models.User.findOne({ where: { email: req.body.email } }).then(user => {
        // compare passwords
        user.comparePassword(req.body.password, function (err, isMatch) {
            // if not match send back to login
            if (!isMatch) {
            return res.redirect('/login');
            }
            // if is match generate JWT
            const mpJWT = generateJWT(user);
            // save jwt as cookie
            res.cookie("mpJWT", mpJWT)
    
            res.redirect('/')
        })
        .catch(err => {
            // if  can't find user return to login
            console.log(err)
            return res.redirect('/login');
        });
        });
    });
  
    // SIGN UP
    app.get('/sign-up/new', (req, res) => {
        res.render('events-signup');
    })
    
   

    // CREATE SIGN UP
    app.post('/sign-up', (req, res) => {
        models.User.create(req.body).then(user => {
            console.log(user)
            const mpJWT = generateJWT(user) 
            res.cookie("mpJWT", mpJWT) 
            res.redirect(`/`);
        }).catch((err) => {
            console.log(err)
        });
      })
} 

