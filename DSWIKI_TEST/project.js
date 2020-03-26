var express = require('express');


var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

var a= {}
var b= {}
var c= {}
var d= {}
var e={}



var search_database = {}
var messages = []

app.get('/messages', function(request,response){
	response.send(messages);
})

app.all('/damburak', function(request,response){
	response.render('damburak');
})




app.post('/message',
	function(request,response){
		var name = request.body.name
		var content = request.body.content
		var time = new Date();
		var daylist = ['Sonday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var day = time.getDay();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		var message = {
			name : name,
			content : content,
			day : daylist[day],
			hours : hours,
			minutes : minutes,
			seconds : seconds
		}
		messages.push(message);
		response.send(message);
		console.log(message);
})
app.all('/',

	function (request, response) {

		response.render('home')
	});

app.all('/result',

	function (request, response) {

		var search = request.body.text;
		console.log(search)
		console.log(search_database)

		switch(search_database[search]){
			case 'human': response.render('human_success', {
				'text': request.body.text, 'introduce': a[request.body.text][0],
				'character': a[request.body.text][1], 'ssul': a[request.body.text][2]
				}); break;
			case 'study': response.render('study_success', {
				'text': request.body.text, 'explain': b[request.body.text][0],
				'tip': b[request.body.text][1]
			});break;
			case 'play':response.render('play_success', {
				'text': request.body.text, 'sort': c[request.body.text][0], 'explain': c[request.body.text][1],
				'tip': c[request.body.text][2]
			}); break;
			case 'restaurant': response.render('restaurant_success', {
				'text': request.body.text, 'overview_restaurant': d[request.body.text][0], 'menu': d[request.body.text][1],
				'tip': d[request.body.text][2]
			});break;
			case 'circle':response.render('circle_success', {
				'text': request.body.text, 'overview_circle': e[request.body.text][0], 'activity': e[request.body.text][1], 'repute': e[request.body.text][2],
				'tip': e[request.body.text][3]
			});break;
			default : response.render('search_fail', { 'text': request.body.text });
		}

	});
	app.all('/human_insert_to_success', function (request, response) { //3
		search_database[request.body.text] = 'human' 
		a[request.body.text] = [request.body.introduce, request.body.character, request.body.ssul]
		console.log('this: '+a[request.body.text][0])
		response.render('human_success', {
			'text': request.body.text, 'introduce': a[request.body.text][0],
			'character': a[request.body.text][1], 'ssul': a[request.body.text][2]
		});
	})

app.all('/study_insert_to_success', function (request, response) {//2
	search_database[request.body.text] = 'study'
	b[request.body.text] = [request.body.explain_study,request.body.tip_study]
	response.render('study_success', {
		'text': request.body.text, 'explain': b[request.body.text][0],
		'tip': b[request.body.text][1]
	});
})

app.all('/play_insert_to_success', function (request, response) { //3
	search_database[request.body.text] = 'play'
	c[request.body.text] = [request.body.sort,request.body.explain_play,request.body.tip_play]
	response.render('play_success', {
		'text': request.body.text, 'sort': c[request.body.text][0], 'explain': c[request.body.text][1],
		'tip': c[request.body.text][2]
	});
})
app.all('/restaurant_insert_to_success', function (request, response) { //3
	search_database[request.body.text] = 'restaurant'
	d[request.body.text] = [request.body.overview_restaurant,request.body.menu,request.body.tip_restaurant]
	response.render('restaurant_success', {
		'text': request.body.text, 'overview_restaurant':d[request.body.text][0], 'menu': d[request.body.text][1],
		'tip': d[request.body.text][2]
	});
})
app.all('/circle_insert_to_success', function (request, response) { //4
	search_database[request.body.text] = 'circle'
	e[request.body.text] = [request.body.overview_circle,request.body.activity,request.body.repute,request.body.tip_circle]
	response.render('circle_success', {
		'text': request.body.text, 'overview_circle': e[request.body.text][0], 'activity': e[request.body.text][1], 'repute': e[request.body.text][2],
		'tip': e[request.body.text][3]
	});
})

app.all('/human_edit',
	function (request, response) {
		var key = request.body.key;
		switch (key) {
			case '1' : a[request.body.text][0] = request.body.introduce_in; break;
			case '2' : a[request.body.text][1] = request.body.character_in; break;
			case '3' : a[request.body.text][2] = request.body.ssul_in; break;	
		}
	
		response.render('human_success', { 'text': request.body.text, 'introduce': a[request.body.text][0], 'character': a[request.body.text][1], 'ssul': a[request.body.text][2] })
	})

app.all('/study_edit',
	function (request, response) {
		var key = request.body.key;
		switch (key) {
			case '1': b[request.body.text][0] = request.body.study_in; break;
			case '2': b[request.body.text][1] = request.body.tip_in; break;
		}
		console.log(key)

		response.render('study_success', { 'text': request.body.text, 'explain': b[request.body.text][0], 'tip': b[request.body.text][1]})
})

app.all('/play_edit',
	function (request, response) {
		var key = request.body.key;
		switch (key) {

			case '1': c[request.body.text][0] = request.body.sort_in; break;
			case '2': c[request.body.text][1] = request.body.play_in; break;
			case '3': c[request.body.text][2] = request.body.tip_in; break;
		}	
		response.render('play_success', { 'text': request.body.text, 'sort': c[request.body.text][0], 'explain': c[request.body.text][1], 'tip': c[request.body.text][2]})
})

app.all('/restaurant_edit',
	function (request, response) {
		var key = request.body.key;
		switch (key) {	
			case '1': d[request.body.text][0] = request.body.overview_in; break;
			case '2': d[request.body.text][1] = request.body.menu_in; break;
			case '3': d[request.body.text][2] = request.body.tip_in; break;
		}

		response.render('restaurant_success', { 'text': request.body.text, 'overview_restaurant': d[request.body.text][0], 'menu': d[request.body.text][1], 'tip': d[request.body.text][2] })
})


app.all('/circle_edit',
	function (request, response) {
		var key = request.body.key;
		switch (key) {
			case '1': e[request.body.text][0] = request.body.overview_in; break;
			case '2': e[request.body.text][1] = request.body.activity_in; break;
			case '3': e[request.body.text][2] = request.body.repute_in; break;
			case '4': e[request.body.text][3] = request.body.tip_in; break;
		}
	
		response.render('circle_success', { 'text': request.body.text, 'overview_circle': e[request.body.text][0], 'activity': e[request.body.text][1], 'repute': e[request.body.text][2], 'tip': e[request.body.text][3] })
})


app.all('/insert',					
	function (request, response) {
		console.log(request.body.text)
		response.render('insert', { 'text': request.body.text })
	});

app.listen(3000, function () {
	console.log('Server is running at http://127.0.0.1:3000!!!!!');
});
