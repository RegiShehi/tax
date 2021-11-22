module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '38c16c3a2a5a71b0c5bc65058e573ed2'),
    },
    url: env('PUBLIC_ADMIN_URL', '/dashboard'),
  },
});
