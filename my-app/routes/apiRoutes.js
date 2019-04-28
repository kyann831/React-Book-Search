const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=search+intitle:keyes&key=AIzaSyA3q7ui7Eca-3JrT_FaO8mq2N6Ur0rdyXQ", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;