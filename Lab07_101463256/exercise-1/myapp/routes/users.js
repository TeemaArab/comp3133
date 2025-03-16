var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


// use body-parser middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// post route to handle form data
router.post('/', (req,res) =>{
  console.log('Recieved POST data:', req.body);
  res.send('Recieved POST data');
})

module.exports = router;
