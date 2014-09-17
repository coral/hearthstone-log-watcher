var express = require('express');
var app = express();
var socket = require('socket.io-client')('http://127.0.0.1:3001');
var spawn = require('child_process').spawn;

var tail = spawn('tail', ['-f', '/Users/coral/Library/Logs/Unity/Player.log']);

var turn = true;

//socket.on('connect', function(){
  tail.stdout.on('data', function (data) {
    //console.log(String(data).indexOf('\n'));

    var str = String(data).split('\n');

    for(var i in str)
    {
    	//console.log(str[i]);
    	temp = str[i];
    	if(temp.indexOf("END waiting for zone FRIENDLY DECK") != -1)
    	{
    		console.log("MY TURN");
        turn = true;
        //socket.emit("event", turn);
    	}

    	if(temp.indexOf("END waiting for zone OPPOSING DECK") != -1)
    	{
    		console.log("NOT MY TURN");
        turn = false;
        //socket.emit("event", turn);
    	}
    }
    
  });
//});


app.get('*', function(req, res){
  res.send(turn);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
