// let myArr = [1,2,3,4,5,6,3]
// myArr=[1,2,3,4,5,6,7]

//  let result=myArr.slice(3,6)
//  console.log(result)
// function numberofZeres(array){
//     var zero=[];
// for(var i=0;i<array.length;i++){
//     if(array[i]===0){
//         zero.push(array[i])
//     }
// }
// // console.log(zero)
// console.log(zero.length)

// }
// numberofZeres([1,2,0,0,1,1,0])
// console.log(numberofZeres[1,0,0,1,0,2,0])




// let array=[1,2,3,4,5,6,7,8,1,1,1,6,7]
// let result=array.filter((value)=>value%2!==0)
// console.log(result)
// console.log(result.length)


// function vowels(characters){
//     if(characters==='a'||characters==='e'||characters==='i'||characters==='o'||characters==='u'){
//         console.log(characters.length)
//     }
//     else{
//         console.log('char is consonenet')
//     }
// }
// vowels('This  is a good girl')

// function vowel(str){
// var vowelsCount=0
// const vowels=['a','e','i','o','u']
// for(let char of str){
//     if(vowels.includes(char)){
//         vowelsCount++
//     }
// }
// return vowelsCount
// }
// console.log(vowel('This is so good'))

// let user={
//     name:'pip',
//     isHappy:'false' 
// }
//  let duplicate={
    
// }

// Object.assign(duplicate,user)
// duplicate.isHappy='false'
// console.log(duplicate.isHappy)

// let user={
//     name:'tom',
//     school:'yes',
//     sayHi:function(){
//         console.log('Hi',this.name)

//     }
// }
// let clone={...user,bored:'yes'}
// console.log(clone)
// admin=user
// user=null
// admin.sayHi()

// let obj={
// count:0,
// sayHi:function(){
// this.count++
// }
  
// }
// console.log(obj.count)
// obj.sayHi()
// obj.sayHi()
// obj.sayHi()
// console.log(obj.count)

// var firstname='adi'
// let user={
//     firstname:'can',
//    hello:()=>{
//         // name:'tom',
//         console.log(this.firstname)
//     }
// }

// // console.log(user.name)
// user.hello()

// let user={
//     name:'adi',
//     age:39,
//    No: function(a,b){
//     console.log('Hi','This is',this.name)
//     console.log(a*b)
//    }

// }
// let admin={
//     name:'dal'
// }
// function hello(a,b){
//     console.log(this.name)
//     console.log(a+b)
// }
// hello.call(admin,1,2)
// console.log(admin)
// user.No.call(user,3,4)
// let result=user.No.bind(admin)
// console.log(result)
// result()
// let result1=hello.bind(admin)
// result1(1,2)

// function Closure(){
//     let a=20;
//     let b=20;
//      function inner(){
//         let c=48
//         function res(){
//             console.log(a*b*c)   
//         }
//         return res
//     }
//     return inner
// }
// Closure()()()
// function letters(letter){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(letter)
//         resolve(letter)
//     },1000)
// })
// }
//  async function Alphabets(){
//      await letters('A')
//     //  console.log(result)
//     await letters('B')
//     //  console.log(result1)
//      await letters('C')
//     //  console.log(result2)

//  }
// Alphabets()

// function promise(letter){
//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve(letter)
//  },1000)
// })
// }

// promise('A').then((letter)=>{
// console.log(letter)
// promise('B').then((letter)=>{
//     console.log(letter)
//     promise('C').then((letter)=>{console.log(letter)
//     })
// })
// })


// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{ resolve("The promise is resolved")
// },1000)
// })


// .then((result)=>{console.log(result)}).catch((result)=>{console.log(result)})




// let object={
//     name:'Mrs tom',
//     scholl:'yes',
//     short:'yes',
// }

// let tom={
//     college:'yes',
//     uniform:'yes'
// }
// let cat={
//     baby:'no',
//     say:function(){
//         console.log("baby")
//     }
// }
// cat.__proto__=object
// tom.__proto__=object
// console.log(tom)
// console.log(cat.hasOwnProperty("baby"))


// let obj={
//     name:'tama',
//     tennager:'no',
//     food:'cereal',
//     preschool:'yes'
// }

// function Alphabets(){
// this.nickname='pup'
// this.excercise='no'
// }
// Alphabets.prototype=obj
// let result1=new Alphabets()
// console.log(result1)

// console.log(result)

// call()
// function call(){
//     let a=1;
//     let b=2;
//     console.log(a+b)
// }
// var name;
// // name = 'Mukul Latiyan';
// console.log(name);
// name = 'Mukul Latiyan';

//function scoped
// function fun(){
//     var name;
//     console.log(name);
//     name = 'Mukul Latiyan';
// }
// fun()

// var a;
// console.log(a)
// a=10;



// let array=[1,2,3,4,5,5,5,6,6,7,8,9,1,2]
// let maping=array.map((value)=>value*value)

// let result1=console.log(maping)

// let newarray=[]
// let even=[1,2,3,3,4,5,6,7]
// let fileri=even.filter((value)=>value%2===0).push(newarray)
// console.log(fileri)

// let adding=fileri.reduce((acc,cur)=>{
//   acc+=cur
//   return acc
// },0)
// console.log(adding)

// let newarr=[]
// let a=[1,2,3,4,5,6]
// var result=a.filter(item=>item%2===0)
// console.log(result)

//  let pushing=newarr.push(result)
//  console.log(pushing)

// let newArray=[]
// let array=[1,2,3,4,5]
// let result= array.filter((value)=>value%2!==0)
// newArray.push(result)
// console.log(newArray)


// let newarr=[]
// let arrays=[1,2,3,4,5]
// newarr.push(array[1])
//  console.log(newarr)
// let newarray=[]
// let array=[1,2,3,4,5,6,7,8]
// for(i=0;i<array.length;i++){
//     if(array[i]%2===0){
//     newarray.push(array[i])
//     }
// }

// console.log(newarray)




















































