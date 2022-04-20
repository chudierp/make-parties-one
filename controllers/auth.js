module.exports = (app, models) => {
     // LOG IN
    app.get('/login', (req, res) => {
        res.render('events-login');
    })
  
    // SIGN UP
    app.get('/sign-up', (req, res) => {
        res.render('events-signup');
    })
    
    
}  