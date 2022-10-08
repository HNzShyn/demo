var express = require('express');
var router = express.Router();

//Set trang chủ (homepage)
router.get("/", (req, res) => {
  //render ra trang index.hbs của thư mục view
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render('tengicungduoc')
})

router.get('/quote', (req, res) => {
  var text = "<h1 style='color: red;'>Practice makes perfect</h1>"
  res.send(text)
})

router.get('/api', (req, res) => {
  var data = 
  {
    name: "Nguyen Tuan Minh",
    age: 23,
    address: "Ha Noi",
    gender: 'male'
  }
  res.json(data);
})

module.exports = router;
