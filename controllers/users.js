const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
  res.render("signUp.ejs");
}

module.exports.signup =  async (req, res) => {
 try {
  let {username, email, password} = req.body;
  const newUser = new User ({username,email});
  let registeredUser = await User.register(newUser,password);
  // console.log(registeredUser);
  req.login( registeredUser ,
    (err) => {
    if (err) {
      next(err);
    } 
     req.flash("success", "Welcome to wanderLust!");
     res.redirect("/listings");
  })
 } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
 }
}


module.exports.renderLoginForm = (req, res) => {
  res.render("login.ejs");
}

module.exports.login = (req, res) => {
   req.flash("success", "Welcome Back to WanderLust!");
   let redirectUrl = res.locals.redirectUrl || "/listings";
   res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
  req.logout( (err) => {
    if (err) {
      next(err);
    }  else {
      req.flash("success", "You are loggged out!");
      res.redirect("/listings");
    }
  });
}