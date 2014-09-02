var spawn = require('child_process').spawn;

tail = spawn('tail', ['-f', '/Users/coral/Library/Logs/Unity/Player.log']);

tail.stdout.on('data', function (data) {
  //console.log(String(data).indexOf('\n'));

  var str = String(data).split('\n');

  for(var i in str)
  {
  	//console.log(str[i]);
  	temp = str[i];
  	if(temp.indexOf("END waiting for zone FRIENDLY DECK") != -1)
  	{
  		console.log(temp);
  	}

  	if(temp.indexOf("END waiting for zone OPPOSING DECK") != -1)
  	{
  		console.log(temp);
  	}
  }
  
});