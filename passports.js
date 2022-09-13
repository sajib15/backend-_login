const passport = require('passport');
// var passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID="808719071273-j7aavqo86djrl39qlojroei8qt5auujs.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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";


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user,done)=>{
  done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
  })
