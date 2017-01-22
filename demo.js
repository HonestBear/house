var app = new Vue({
	el : '#app',
	data : {
		message : 'Hello Vue!'
	}
})
var app2 = new Vue({
	el : '#app-2',
	data : {
		message : 'you loaded this page on' + new Date()
	}
})
var app3 = new Vue({
	el : '#app-3',
	data : {
		seen : true
	}
})
var app4 = new Vue({
	el : '#app-4',
	data : {
		todos :[
			{ text : 'Learn Javascript'},
			{ text : 'Learn Vue'}
		]
	}
})
var app5 = new Vue ({
	el : '#app-5',
	data : {
		message : 'Hello World.js'
	},
	methods : {
		reverseMessage : function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
})
var app6 = new Vue ({
	el : "#app-6",
	data : {
		message : "Hello"
	}
})