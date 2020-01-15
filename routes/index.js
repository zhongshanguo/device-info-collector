var express = require('express');
var router = express.Router();

const dao = require('../dao/db');
const service = require('../service/device.service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('views/index.html');
});

router.post('/device/collect', function(req,res,next){
  let deviceInfo = req.body;
  if(deviceInfo){
      service.save(deviceInfo)
      .then((data)=>{
        res.json({success: true, data: data, message: ''});
      })
      .catch((err)=>{
        res.statusCode = 500;
        res.json({success: false, data: {}, message: err});
      });
  }
});

module.exports = router;