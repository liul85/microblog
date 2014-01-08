var crypto = require('crypto');

function checksignature(signature, timestamp, nonce, token){
  var array = new Array();
  array[0] = timestamp;
  array[1] = nonce;
  array[2] = token;
  array.sort();
  
  var hasher = crypto.createHash('sha1');
  var msg = array[0] + array[1] + array[2];
  hasher.update(msg);
  var hashmsg = hasher.digest('hex');
  if (hashmsg == signature){
    return true;
  }
  else{
    return false;
  }
}

exports.checksignature = checksignature;
