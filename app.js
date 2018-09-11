'use strict'

const express = require('express');
const http = require('http');
const app = express();


app.get('/keyboard',function(req,res) {
	var data = {
		'type' : 'buttons',
		'buttons' : ['과일','채소','정보']
	};
	res.json(data);
});


http.createServer(app).listen(80,function() {
	 console.log('서버 실행 중');
});