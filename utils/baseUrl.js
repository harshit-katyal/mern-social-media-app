const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://socialmedia--app.herokuapp.com/";

module.exports = baseUrl;
