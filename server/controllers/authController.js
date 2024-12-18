const passport = require("passport");
const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const DiscordStrategy = require("passport-discord").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

// Configuración de Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Utiliza findOneOrCreate para encontrar o crear el usuario
        const user = await User.findOneOrCreate({
          googleId: profile.id,
          email: profile.emails[0].value,
          displayName: profile.displayName,
        });
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Configuración de Discord Strategy
passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: "/auth/discord/callback",
      scope: ["identify", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Utiliza findOneOrCreate para encontrar o crear el usuario
        const user = await User.findOneOrCreate({
          discordId: profile.id,
          email: profile.email,
          displayName: profile.username,
        });
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Configuración de Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Utiliza findOneOrCreate para encontrar o crear el usuario
        const user = await User.findOneOrCreate({
          facebookId: profile.id,
          email: null,
          displayName: profile.displayName,
        });
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Serializar el usuario
passport.serializeUser((user, done) => {
  done(null, { id: user.id, displayName: user.displayName });
});

// Deserializar el usuario
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Exporta los métodos para los handlers en authRoutes.js
module.exports = {
  loginWithGoogle: passport.authenticate("google", { scope: ["profile", "email"] }),
  loginWithDiscord: passport.authenticate("discord"),
  loginWithFacebook: passport.authenticate("facebook"),
};
