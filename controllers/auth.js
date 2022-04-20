module.exports = (app, models) => {
     // LOG IN
    app.get('/login', (req, res) => {
        res.render('events-login');
    })

    // CREATE LOGIN
    app.post('/login', (req, res) => {
        console.log(req.body);
    })
  
    // SIGN UP
    app.get('/sign-up/new', (req, res) => {
        res.render('events-signup');
    })

    // CREATE SIGN UP
    app.post('/sign-up', (req, res) => {
        models.User.create(req.body).then(event => {
          res.redirect(`/`);
        }).catch((err) => {
          console.log(err)
        });
      })
} 