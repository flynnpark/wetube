import passport from 'passport';
import GithubStrategy from 'passport-github';
import User from './models/user';
import { githubLoginCallback } from './controllers/userController';

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: 'http://localhost:4000/auth/github/callback'
  }),
  githubLoginCallback
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
