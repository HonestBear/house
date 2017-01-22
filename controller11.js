function l(){
	return console.log(...arguments)
}

//模块导出
// module.exports  = a =>{
// 	l(a);
// } ;


//可以提前标明变量与常量的值，然后在导出时候直接用上。
let   a = 1;
const b = function(){
	return this.a;
}
//常规导出(可以多次)
export const A ="233";
export const B = a =>{
	l(A,a)
};
//如果函数返回值是一个对象的话，必须要有()
export const C = () => ({
	a:2,
	b:3
})

//默认导出(只能有一次)
export default{
	a,
	b,
	c:{
		d(){
			return this
		}
	}
};

