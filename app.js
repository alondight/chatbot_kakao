const express = require('express');
const app = express();


app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('안녕하세요!ㅎㅎ THE SMC 입니다. ');
})
app.get('/keyboard',function(req,res) {
	var data = {
		'type' : 'buttons',
		'buttons' : ['과일','채소','정보']
	};
	res.json(data);
});

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
})