import * as passportLocal from "passport-local";
import * as User from '../users/models';

function config(passport) {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use('local-login', new passportLocal.Strategy((username, password, done) => {
        User.findOne({ username: username }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            user.authenticate(password).then(
                (res) => {
                    if(res) {
                        return done(null, user)
                    }
                    return done(null, false, { message: 'Incorrect password.' });
                },
                (err) => {
                    return done(null, false, { message: 'Incorrect password.' });
                }
            );
        });
    }));

    passport.use('local-signup', new passportLocal.Strategy((username, password, done) => {
        User.findOne({ username: username }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (user) {
                return done(null, false, { message: 'That username is already in use.' });
            }

            User.generateHash(password).then(
                (hashedPassword) => {
                    var user = new User({
                        username: username,
                        password: hashedPassword
                    });
                    user.save((err, user) => {
                        if(err) {
                            return done(err);
                        } else {
                            return done(null, user);
                        }
                    });
                },
                (error) => {}
            );
        });
    }));
}


export = config
