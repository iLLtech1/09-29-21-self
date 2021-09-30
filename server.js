const express = require ('express')
const { join } = require('path')
const passport = require('passport')
const { Strategy: LocalStrategy } = require ('passport-local')
conat { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const syncDB = require('./db')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

passport.use()
passport.serializeUser()
passport.deserializeUser()

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secret.key
})

app.use(require('./Routes'))

syncDB()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))

