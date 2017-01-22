

/*let {a, ...rest} ={
	a :1,
	b:2,
	c:"asdf",
	d:3
};

console.log(a,rest);*/

/*function l() {
	return console.log.apply(console,arguments);
}
*/





/*l(1,2,3,4);
log(1,2,3,4);
*/

//Array
/*Array.prototype.s = function () {
	return this.splice(...arguments);
};

l([1,3,4].splice(1,2,"a","b"));
l([1,3,4].s(1,2,"a","b"));*/


//Object
/*Object.k = function () {
	return this.keys(...arguments);
};

l(Object.keys({a:1,b:2}));
l(Object.k({a:1,b:2}));   */      


/*var a = function () {
	console.log(arguments);
};                                                                                      


const b =() =>{//箭头里arguments 不一样
	console.log(arguments);
};
a();
b();*/

//没有window说法了。
/*function a() {
	
}
l(global.console)*/


/*var a =[];
for(var i =0;i<7;i++){

	a[i] = function () {
		console.log(i);
	};
}

a[6]();


console.log(i)
*/


/*let tmp =123;*/

 /*if(true){
 	
 	let tmp =321;
 }*/

/*function aaa(){
 	let tmp =321;
 	 console.log(tmp);
 }
aaa()
 console.log(tmp);

{let eeee =66666;

	 console.log(eeee);
	{let eeee =77777;console.log(eeee);}}
*/

/*function bar (x =y ,y=2){
	return [x,y];
}

bar();*/



/*typeof i;*/
/*function f(){
	console.log("aaa");
}
let[x=f()]=[1];


let x;
if([1][0]=== undefined){
	x =f();
}else{
	x=[1][0];
}*/






/*var {x:y = 3} = {};
	console.log(y);

var {x:y = 3} = {x: 5};
	console.log(y);

*/

/*var arr = [1, 2, 3];
var {0 : first, 2 : last} = arr;
console.log(first);
console.log(last);*/





/*console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));*/



console.log('\z' === 'z');  // true
/*console.log('\172' === 'z'); // true*/
console.log('\x7A' === 'z'); // true
console.log('\u007A' === 'z'); // true
console.log('\u{7A}' === 'z'); // true




