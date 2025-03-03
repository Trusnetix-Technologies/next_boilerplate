module.exports = (app) => {
  app.get("/test", (req, res) => {
    console.log("Hi there!");
    res.send("Hi there! Also, Yay!");
  });
};
