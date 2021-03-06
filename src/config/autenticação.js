const LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../services/usuarios/usuarios');
const passport = require('passport');

passport.use(
    new LocalStrategy({
        usernameField:'email',
        passwordField: 'senha',
        session:false
    }, async (email, senha, done) => {
        try {
            const Usuario = new Usuario({email: email});
            await Usuario.buscarPorEmail();
        } catch (error) {
            done(error)
        }
    })
)
