// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// array.forEach(n => {
//   squared.push(n * n);
// });

// const square = n => n * n;
// const squared = array.map(square);

// const squared = [];
// for (let i = 0; i < array.length; i++) {
//   squared.push(array[i] * array[i])
// }

// console.log(squared);

//------------------------------------------------------

// const items = [
//   {
//     id: 1,
//     text: "hello"
//   },
//   {
//     id: 2,
//     text: "say"
//   }
// ];

// const texts = items.map(item => item.text);
// console.log(texts);
//------------------------------------------------------

// const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];
// const index = superheroes.indexOf("닥터 스트레인지");
// console.log(index);

//------------------------------------------------------

// const todos = [
//   {
//     id: 1,
//     text: "자바스크립트 입문",
//     done: true
//   },
//   {
//     id: 2,
//     text: "함수 배우기",
//     done: true
//   },
//   {
//     id: 3,
//     text: "객체와 배열 배우기",
//     done: true
//   },
//   {
//     id: 4,
//     text: "배열 내장함수 배우기",
//     done: false
//   }
// ];

// const todo = todos.find( todo => todo.done === false );
// console.log(todo);

// const tasksNoDone = todos.filter(todo => !todo.done)
// console.log(textsNoONEV)

//------------------------------------------------------

// const numbers = [10, 20, 30, 40];

// const value = numbers.unshift(7);
// numbers.unshift(7);
// numbers.unshift(71);
// console.log(value);

// const index = numbers.indexOf(30);
// const spliced = numbers.splice(index, 1);
// console.log(spliced);
// console.log(numbers);

//------------------------------------------------------
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const concated = arr1.concat(arr2);
// console.log(concated);

// const array = [1,2,3,4,5];
// console.log(array.join());
// console.log(array.join(', '));

//------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(n => {
//   sum += n;
// })

// const sum = numbers.reduce(
//   (accumulater, current, index, array) => accumulater + current,
//   0
// );

// console.log(sum);

//------------------------------------------------------

// const avg = numbers.reduce((accumulator, current, index, array) => {
//   if (index === array.length - 1) {
//     return (accumulator + current) / array.length;
//   }
//   return accumulator + current;
// }, 0);
// console.log(avg);

//------------------------------------------------------
// function Animal(type, name, sound) {
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function() {
//   console.log(this.sound);
// };

// Animal.prototype.sharedValue = 1;

// const dog = new Animal("개", "멍멍이", "멍멍");
// const cat = new Animal("고양이", "야옹이", "야옹");

// dog.say();
// cat.say();

//------------------------------------------------------
// class Animal {
//   constructor(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//   }
//   say() {
//     console.log(this.sound);
//   }
// }

// console.log(Animal.prototype.say);

// const dog = new Animal("개", "멍멍이", "멍멍");
// const cat = new Animal("고양이", "야옹이", "야옹");

// dog.say();
// cat.say();

//------------------------------------------------------
// function work( callback ) {
//   setTimeout(() => {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}

//     const end = Date.now();
//     console.log(end - start + "ms");
//     callback(end - start)
//   }, 0);
// }
// console.log("작업 시작!");

// work((ms) => {
//   console.log('작업이 끝났어요!');
//   console.log('작업이 끝났어요!');
// });

// console.log("다음 작업");
//------------------------------------------------------
// const myPromise = newPromise(( resolve, reject) => {
//   setTimeout(() => {
//     resoleve('result');
//   }, 1000)
// })
//------------------------------------------------------
// const ironMan = {
//   name: "토니 스타크",
//   actor: "로버트 다우니 주니어",
//   alias: "아이언맨"
// };

// const captainAmerica = {
//   name: "스티븐 로저스",
//   actor: "크리스 에반스",
//   alias: "캡틴 아메리카"
// };

// function print(hero) {
//   const text = `${hero.alias}(${
//     hero.name
//   }) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
//   console.log(text);
// }

// function print(hero) {
//   hero.name = "aka-kang";
//   const text = `${hero.alias}(${hero.name})(${hero.actor})`;
//   console.log(text);
// }

// console.log(captainAmerica.name);
// print(captainAmerica);
// console.log(captainAmerica.name);

//------------------------------------------------------

//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------

// const ironMan = {
//   name: "토니 스타크",
//   actor: "로버트 다우니 주니어",
//   alias: "아이언맨"
// };

// const captainAmerica = {
//   name: "스티븐 로저스",
//   actor: "크리스 에반스",
//   alias: "캡틴 아메리카"
// };

// function print(hero) {
//   const {alias, name, actor} = hero;
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//   console.log(text);
// }

// print(ironMan);
// print(captainAmerica);

// const dog = {
//   name : '멍멍이',
//   sound : '멍멍!',
//   say : function() {
//     console.log(this.sound);
//   }
// };

// const cat = {
//   name : '야옹이',
//   sound : '야옹~'
// }

// cat.say = dog.say;
// dog.say();
// cat.say();

// const numbers = {
//   a: 1,
//   b: 2,
//   get sum() {
//     console.log("sum 함수가 실행됩니다!");
//     return this.a + this.b;
//   }
// };

// console.log(numbers.sum);
// numbers.b = 5;
// console.log(numbers.sum);

// var person = {
//   _name : "Tom",
//   get name(){
//     return this._name;
//   },
//   set name(value) {
//     var str = value;
//     console.log("str " + str)
//     this._name = str;
//   }
// }

// console.log(person.name);
// person.name ="huck";
// console.log(person.name);

// var point ={
//   x: 1.0,
//   y: 1.0,
//   get r() { return Math.sqrt( this.x*this.x + this.y*this.y ); },
//   get theta() { return Math.atan2(this.y, this.x); },

//   set polarCoordinates(pc) {
//     this.x = pc.r*Math.cos(pc.theta);
//     this.y = pc.r*Math.sin(pc.theta);
//   }
// };

// console.log( point.r );
// console.log( point.theta );

// const numbers = {
//   _a:1,
//   _b:2,
//   sum:3,
//   calculate() {
//     console.log('calculate');
//     this.sum = this._a + this._b;
//   },
//   get a() {
//     return this._a;
//   },
//   get b() {
//     return this._b;
//   },
//   set a(value) {
//     this._a = value;
//     this.calculate();
//   },
//   set b(value) {
//     this._b = value;
//     this.calculate();
//   }

// }

// console.log(numbers.sum);
// numbers.a = 5;
// console.log(numbers.sum);
// numbers.b = 7;
// console.log(numbers.sum);
// console.log(numbers.sum);
// console.log(numbers.sum);

// const objects = [
//   {name:'멍멍이'},{name:'야옹이'}
// ]

// objects.push({
//   name:'멍뭉이'
// })
// console.log(objects.length)

// const names = ["멍멍이", "야옹이", "멍뭉이"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// const numbers = [10,20,30,40,50];
// for (let number of numbers) {

// }

// function sumOf(numbers) {
//     for( let i = 0 ; i < numbers.length ; i++ ) {
//       if (numbers[i] > 3){
//         console.log(numbers[i])
//       }
//     }

// }

// const result = sumOf([1,2,3,4,5,6,7]);
// console.log(result)

// function biggerThanThree(numbers) {
//   const array = [];
//   for(let i = 0 ; i < numbers.length ; i++){
//     if(numbers[i] > 3){
//       array.push ( numbers[i] );
//     }
//   }
//   return array;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

// const items = [
//   {
//     id: 1,
//     text :'hello'
//   },
//   {
//     id:2,
//     text:'bye'
//   }
// ]

// const texts = items.map(item => item.text)
// console.log(texts)

// const todos = [
//   {
//     id: 1,
//     text: "자바스크립트 입문",
//     done: true
//   },
//   {
//     id: 2,
//     text: "함수 배우기",
//     done: true
//   },
//   {
//     id: 3,
//     text: "객체와 배열 배우기",
//     done: true
//   },
//   {
//     id: 4,
//     text: "배열 내장함수 배우기",
//     done: false
//   }
// ];

// const tasksNotDone = todos.filter(todo => !todo.done);
// console.log(tasksNotDone);

// const numbers = [10,20,30,40];

// const sliced = numbers.slice(0,2)
// console.log(sliced)
// console.log(numbers)

// const numbers = [1,2,3,4,5];

// const avg = numbers.reduce((accumulator, current, index, array) => {
//   if (index === array.length - 1) {
//     return (accumulator + current) / array.length;
//   }
//   return accumulator + current;
// },0)

// console.log(avg)

// const alphabets = ["a", "a", "a", "b", "c", "c", "d", "e"];
// const counts = alphabets.reduce((acc, current) => {
//   if (acc[current]) {
//     acc[current] += 1;
//   } else {
//     acc[current] = 1;
//   }
//   return acc;
// }, {});

// console.log(counts);

// function Animal(type, name, sound){
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function(){
//   console.log(this.sound);
// }

// function Dog(name, sound) {
//   Animal.call(this, '개',name, sound)
// }

// function Cat(name, sound) {
//   Animal.call(this, '고양이',name, sound)
// }

// Dog.prototype = Animal.prototype;
// Cat.prototype = Animal.prototype;

// const dog = new Animal('개','멍멍이','멍멍');
// const cat = new Animal('고양이','야옹이','야옹');

// dog.say();
// cat.say();

// class Food{
//   constructor(name) {
//     this.name = name;
//     this.brands = [];
//   }
//   addBrand(brand) {
//     this.brands.push(brand)
//   }
//   print(){
//     console.log(`${this.name} 을 파는 음식점들`);
//     console.log(this.brands.join(', '));
//   }

// }

// const pizza = new Food('피자');
// pizza.addBrand('피자헛');
// pizza.addBrand('도미노 피자');

// const chicken = new Food('치킨');
// chicken.addBrand('굽네치킨');
// chicken.addBrand('BBQ');

// pizza.print();
// chicken.print();

// const calculateCircleArea = (r = 1) => {
//   return Math.PI * r * r;
// }

// const area = calculateCircleArea();
// console.log(area)

// function isAnimal(text){
//   return text === '고양이' || text === '개'
// }

// const dog = {
//   name: '멍멍이',
//   sound: '멍멍',
//   say: function() {
//     console.log(this.sound)
//   }
// }

// const cat = {
//   name:'야옹이',
//   sound:'야옹~'
// }

// cat.say = dog.say

// dog.say();
// cat.say();

// const ironMan = {
// 	name: 'Name',
// 	actor: 'Actor',
// 	alias: 'Alias'
// }

// const captainAmerica = {
// 	name: 'Name',
// 	actor: 'Actor',
// 	alias: 'Alias'
// }

// function print(hero){
// 	const { name, actor, alias } = hero;
// 	const text = `${name}(${actor})를 맡은 배우는 ${alias} 입니다.`
// 	console.log(text);
// }

// print(ironMan);
// print(captainAmerica);

// const dog = {
// 	_name : '멍멍이',
// 		set name(value) {
// 		console.log('이름이 바뀝니다..' +  value)
// 		this._name = value;
// 	}
// }

// console.log(dog._name);
// dog.name = '뭉뭉이';
// console.log(dog._name);

// const numbers = {
// 	_a : 1,
// 	_b : 2,
// 	sum :3,
// 	calculate() {
// 		console.log('calculate');
// 		this.sum = this._a + this._b;
// 	},
// 	get a() {
// 		return this._a;
// 	},
// 	get b() {
// 		return this._b;
// 	},
// 	set a(value){
// 		this._a = value;
// 		this.calculate();
// 	},
// 	set b(value) {
// 		this._b = value;
// 		this.calculate();
// 	}
// }

// console.log(numbers.sum);
// numbers.a = 5;

// const array = [
// 	{name:'멍멍이'},
// 	{name:'야옹이'}
// ]

// array.push({
// 	name:'멍뭉이'
// });
// console.log(array.length)

// console.log(array)

// const superheroes = [
// 	'아이언맨',
// 	'캡틴 아메리카',
// 	'토르',
// 	'닥터 스트레인지'
// ]

// superheroes.forEach((item) => {
// 	console.log(item)
// });

// const array = [1,2,3,4,5,6,7,8];
// const squared = [];

// array.forEach(function(n){
// 	squared.push(n*n);
// })

// console.log(squared)

// const dog = {
//   _name : '멍멍이',

//   set name (value){
//     console.log('이름이 바뀝니다..' + value);
//     this._name = '뭉뭉이';
//   }
// };

// dog.name = '뭉뭉이';

// console.log(dog._name);

// const dog = {
//   name :'멍멍이',
//   sound : '멍멍',
//   say() {
//     console.log( this.sound );
//   }
// };

// dog.say();

// const cat = {
//   name : '야옹이',
//   sound : '야옹~'
// }

// cat.say = dog.say;
// dog.say();
// cat.say();

// const numbers = {
//   _a: 1,
//   _b: 2,
//   sum: 3,
//   calculate() {
//     console.log('caculate');
//     this.sum = this._a + this._b;
//   },
//   get a(){
//     return this._a;
//   },
//   get b(){
//     return this._b;
//   },
//   set a(value) {
//     this._a = value;
//     this.calculate();
//   },
//   set b(value) {
//     this._b = value;
//     this.calculate();
//   }
// }

// console.log(numbers.sum);
// numbers.a = 5;
// numbers.b = 7;
// numbers.a = 9;
// console.log(numbers.sum);

// superheroes.forEach( function(item){
//   console.log(item)
// });

// const array = [1,2,3,4,5,6,7,8];
// const squared = [];
// const superheroes = ['아이언맨','캡틴 아메리카','토르','닥터 스트레인지'];
// const index = superheroes.indexOf('토르');
// console.log(index);

// const todos = [
//   {
//     id: 1,
//     text: "자바스크립트 입문",
//     done: true
//   },
//   {
//     id: 2,
//     text: "함수 배우기",
//     done: false
//   },
//   {
//     id: 3,
//     text: "함수 배우기",
//     done: false
//   }
// ];

// const tasksNotDone = todos.filter(todo => !todo.done);

// console.log(tasksNotDone);

// function Animal(type, name, sound) {
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function() {
//   console.log(this.sound);
// };
// Animal.prototype.sahredValue = 1;

// function Dog(name, sound) {
//   Animal.call(this, "개", name, sound);
// }

// const array = [];

// // let text = '';
// // if(array.length === 0) {
// //   text = '배열이 비어있습니다.'
// // } else {
// //   text = '배열이 비어있지 않습니다.'
// // }

// let text =
//   array.length === 0 ? "배열이 비어있습니다." : "배열이 비어있지 않습니다.";
// console.log(text);

// const numbers = [1, 2, 3, 4, 5];

// const avg = numbers.reduce((acc, current, idx, array) => {
//   console.log;
// }, 0);

// const a = false || true;
// const value = !((true && false) || (true && false) || !false);

// const a = null;
// const b = undefined;
// const equals = a === b;
// console.log(equals);

// const alphabets = ['a','a','a','b','c','c','d','e'];
// const counts = alphabets.reduce( (acc,current) => {
//   if( acc[current] ) {
//     acc[current] += 1;
//   } else {
//     acc[current] = 1;
//   }
//   return acc;
// },{});

// console.log(counts)

// const alphabets = ['a','a','a','b','c','c','d','e'];
// const counts = alphabets.reduce( (acc,current) =>{
//  if(acc[current]){
//    acc[current] += 1;
//  }else {
//    acc[current] =1;
//  }
//  return acc;
// }, {});

// console.log(counts)

// function Animal(type, name, sound) {
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
//   this.say = function(){
//     console.log( this.sound )
//   }
// }

// const dog = new Animal('개','멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');

// console.log( dog.say )
// cat.say();

// function Animal(type, name, sound) {
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function() {
//   console.log(this.sound);
// };
// Animal.prototype.sharedValue = 1;

// function Dog(name, sound) {
//   Animal.call(this, '개', name, sound);
// }
// Dog.prototype = Animal.prototype;

// function Cat(name, sound) {
//   Animal.call(this, '고양이', name, sound);
// }
// Cat.prototype = Animal.prototype;

// const dog = new Dog('멍멍이', '멍멍');
// const cat = new Cat('야옹이', '야옹');

// dog.say();
// cat.say();

// class Animal {
//   constructor (type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound =sound;
//   }
//   say() {
//     console.log(this.sound)
//   }
// }

// class Dog extends Animal {
//   constructor(name, sound) {
//     super('개', name, sound);
//   }
// }

// class Cat extends Animal {
//   constructor(name, sound) {
//     super('고양이', name, sound);
//   }
// }

// const dog = new Dog('멍멍이','멍멍');
// const cat = new Cat('야옹이','야옹');

// dog.say();
// cat.say();

// class Food {
//   constructor(name) {
//     this.name = name;
//     this.brands =[];
//   }
//   addBrand(brand) {
//     this.brands.push(brand)
//   }
//   print() {
//     console.log(`${this.name} 을 파는 음식점들:`)
//     console.log(this.brands.join(', '))
//   }
//  }

//  const pizza = new Food('피자');
//  pizza.addBrand('피자헛');
//  pizza.addBrand('도미노 피자');

//  const chicken = new Food('치킨');
//  chicken.addBrand('굽네치킨');
//  chicken.addBrand('BBQ');

//  pizza.print();
//  chicken.print();

//  const arr1 = [1,2,3];
//  const arr2 = [4,5,6];
//  const concated = arr2.concat(arr1);

//  console.log(concated)

// const array = [1,2,3,4,5];
// let sum = array.reduce( (accumulator, current) => accumulator + current, 0 );

// console.log(sum);

// class Animal {
//   constructor(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//   }
//   say() {
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {
//   constructor(name, sound) {
//     super("개", name, sound);
//   }
// }

// class Cat extends Animal {
//   constructor(name, sound) {
//     super("고양이", name, sound);
//   }
// }

// const dog = new Dog('멍멍이','멍멍');
// const cat = new Cat('고양이','야옹');

// dog.say();
// cat.say();

// var Circle = class {
//   constructor(center, radius) {
//     this.center = center;
//     this.radius = radius;
//   }
//   area() {
//     var a = Math.PI*this.radius*this.radius;
//     console.log(a)
//   }
// }

// class Circle {
//   constructor(center, radius) {
//     this.center = center;
//     this.radius = radius;
//   }
//   area() {
//     return Math.PI*this.raidus+this.radius;
//   }
//   toString() {
//     return "Circle"
//     + "중심점 (" + this.center.x + ", " + this.center.y
//     + "), 반지름 = " + this.radius;
//   }
// }
// class Ball extends Circle {
//   move(dx, dy) {
//     this.center.x += dx;
//     this.center.y += dy;
//   }
//   toString() {
//     var str = super.toString();
//     return str.replace("Circle","Ball")
//   }
// }

// var ball = new Ball({x:0, y:0},2);
// console.log(ball.toString());
// console.log(ball.area());
// ball.move(1,2,);
// console.log(ball.toString());

// function work(callback) {
// 	setTimeout(()=>{
// 		const start = Date.now();
// 		for (let i = 0 ; i < 10000; i++) {

// 		}
// 		const end = Date.now();
// 		console.log(end - start + 'ms');
// 		callback(end - start)
// 	},0);
// }

// console.log('작업 시작!');
// work((ms)=>{
// 	console.log('작업이 끝났어요!')
// 	console.log(ms + 'ms 걸렸어요')
// });
// console.log('다음 작업');

// function Animal(type, name, sound) {
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function(){
//   console.log(this.sound)
// }

// function Dog(name, sound){
//   Animal.call(this,'개',name, sound)
// }

// function Cat(name, sound){
//   Animal.call(this,'야옹이',name, sound)
// }

// const dog = new Dog('멍멍이','멍멍');
// const cat = new Cat('야옹이','야옹');

// dog.say();
// cat.say();

// function say(greeting,honorifics){
//   console.log(greeting + " " + honorifics + this.name);
// }

// var tom = {name: "Tom Sawyer"};
// var becky = {name: "Becky Thatcher"};
// say.apply(tom, ["Hello!", "Mr"]);
// say.apply(becky, ["Hello!", "Ms"]);

// say.call(tom,"Hello","Mr");
// say.call(becky,"Hello","Ms");

// class Food {
//   constructor(name){
//     this.name = name;
//     this.brands = [];
//   }
//   addbrand(brand){
//     this.brands.push(brand);
//   }
//   print() {
//     console.log('${this.name}')
//     console.log(this.brands.join(', '))
//   }
// }

// console.log(!undefined);
// console.log(!null);
// console.log(!0);
// console.log(!'');
// console.log(!NaN);
// console.log(!false);

// const value = 1 / 'asdf';

// console.log(true && 'hello');
// console.log(false && 'hello');

// const namelessDog = {
//   name: '뭉뭉이'
// }

// function getName(animal) {
//   const name = animal && animal.name;
//   return name || '이름이 없는 동물입니다.';
// }

// const name = getName( );
// console.log(name);

// function calulateCircleArea(r = 1) {
//   return Math.PI * r * r;
// }
// const area = calulateCircleArea();
// console.log(area)

const isAnimal = text => ["고양이", "개", "거북이", "너구리"].includes(text);

console.log(isAnimal("개"));
console.log(isAnimal("노트북"));
