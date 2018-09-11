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
				  "text":  "개인정보 수집 및 이용동의 경품배송을 위해 개인정보 수집 이용 및 위탁업무에 동의하시고, \n개인정보를 입력해주시면 이벤트 응모가 완료됩니다. \n은 귀하의 개인정보를 다음의 목적으로 수집 이용 및 위탁합니다. \n-수집하는 개인정보: 성명, 연락처\n -수집목적: 이벤트 참여자 식별, 서비스 제공 및 이벤트 경품 배송 및 안내 등 활용 \n-개인정보 보유 및 이용기간: 개인정보 제공일로부터 1년 이후 삭제 \n※개인정보 수집 및 업무내용 1) : 이벤트 업무 운영 대행 위와 같이 개인정보 제공 및 개인정보 위탁에 동의하십니까?\n (단, 동의하지 않으실 경우 참여가 취소됩니다)",
				  "url": "https://coupon/url"
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