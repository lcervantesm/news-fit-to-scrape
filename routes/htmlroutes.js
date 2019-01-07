var axios = require("axios");

module.exports = function (app) {
  app.get("/", function (req, res) {
    var articlesHB;
    axios.get("http://localhost:3000/api/articles").then(function(response) {
      articlesHB = {
        articles: response.data
      };
      res.render("index.handlebars", articlesHB);
    })
    .catch(function(error) {
      console.error(error.stack);
    });
  });
};
