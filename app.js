const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//request test
app.get('/keyboard',function(req,res) {
	var data = {
		'type' : 'buttons',
		'buttons' : ['퀴즈이벤트']
	};
	res.json(data);
});

//response
app.post('/message',function(req , res) {
	var msg = req.body.content;
	console.log("전달받은 메시지: "+ msg);

	var send = {}; //response data

	switch(msg){

		case'퀴즈이벤트':
		send = 
			{
			  "message": {
				"text": "퀴즈 이벤트 참여 이벤트입니다.",
				"photo": {
				  "url": "https://thesmc.co.kr/wp-content/uploads/2018/07/%EB%A9%94%EC%9D%B8-%EC%8D%B8.jpg",
				  "width": 618,
				  "height": 378
				},
				"message_button": {
				  "label": "퀴즈 이벤트 참여하기",
				  "url": "https://thesmc.co.kr"
				}
			  },
			  "keyboard": {
				"type": "buttons",
				"buttons": [
				  "처음으로",
				  "동의",
				  "동의안함"
				]
			  }
			}

		break;

	};


	res.json(send);
});




//server running
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
})