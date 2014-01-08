var cs = require('../lib/checksignature');
exports.verify = function(req, res){
  //get four params from request
  var token="liuliang";
  var signature = req.query.signature;
  var echostr = req.query.echostr;
  var timestamp = req.query.timestamp;
  var nonce = req.query.nonce;
  var check = false;
  console.log("signature: ", signature, "\nechostr: ", echostr, "\ntimestamp: ", timestamp, "\nnonce: ", nonce);
  var check = cs.checksignature(signature, timestamp, nonce, token);

  if (check){
    res.write(echostr);
  }
  else{
    res.write("error data");
  }
  res.end();
};
