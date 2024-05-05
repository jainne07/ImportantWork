import {Hasformatter} from './interface.js'; 
//import {Invoice} from './invoice.js' 
//explicit  
let character:string; 
let sno:number; 
let isLoggedin:boolean; 
character="String Example" 
sno=23; 
isLoggedin=true; 
 
//arrays 
let arr:string[]=[]; 
arr=["Sam", "Smith","James"] 
console.log(character, sno, isLoggedin, arr) 
 
//union types 
let mixed:(string|number)[]=[]; 
mixed=[23,"sam",31,"sunny"] 
console.log(mixed) 
let uid:string|number; 
uid="123sss"; 
uid=123 
console.log(uid) 
 
//objects 
let prs:object; 
prs={name:"Suresh", "age":34, address:"shahdara,delhi-32"} 
console.log(prs) 
 
let prs1:{ 
  name:string, 
  age:number, 
  address:string 
} 
prs1={name:"Suresh Saxena", "age":34, address:"Jwala nagar, Shahdara, delhi-32"} 
console.log(prs1) 
 
//any 
let data:any; 
data="any type"; 
console.log(data); 
data=34; 
console.log(data); 
data=true; 
console.log(data) 
data=["sam","james"] 
console.log(data) 
data={name:"samplecode",age:34} 
console.log(data) 
let arrAny:any[]=[]; 
arrAny.push("string"); 
arrAny.push(23); 
arrAny.push(true) 
console.log(arrAny) 
let prsObj:{ 
  name:any, 
  age:any 
} 
prsObj={name:123,age:"twenty"} 
console.log(prsObj) 
 
//function 
let greet:Function; 
greet=()=>{ 
  console.log("Greetings") 
} 
console.log(greet) 
const add=(a:number, b:number, c?:string | number)=>{ 
  console.log(c + " - "+ (a + b)) 
} 
add(5,23,"addition") 
add(5,23,123) 
 
//type 
type strNum= string | number; 
type info={name:string, profession:string} 
const greeting=(uid:strNum, item:string)=>{ 
  console.log(`${item} has a uid ${uid}` ) 
} 
greeting('23SD','Suresh') 
greeting(34,'Mahesh') 
const prson=(user:info)=>{ 
  console.log(`${user.name} works as ${user.profession}` ) 
} 
prson({ name: "Sunny", profession: "Artist" }) 
prson({ name: "Sam", profession: "Web Developer" }) 
 
//function signatures 
let greetnm:(a:string, b:string)=>void; 
greetnm=(name:string, address:string)=>{ 
  console.log(`${name} live in ${address}`) 
} 
greetnm("james","texas") 
 
let calcul:(a:number, b:number, c?:string)=>number; 
calcul=(num:number, num1:number, action?:string)=>{ 
  if(action ==='add'){ 
    return num+num1  
  } 
  else if(action === "multiply"){ 
    return num*num1 
  } 
  else{ 
    return num-num1 
  } 
} 
console.log(calcul(21,2)) 
console.log(calcul(21,2,"add")) 
console.log(calcul(21,2,"multiply")) 
 
let person:(user:{name:string, age:number})=>void 
type usr={name:string, age:number} 
person=(user:usr)=>{ 
  console.log(`${user.name.toUpperCase()} is ${user.age} years old`) 
} 
person({name:"jenny",age:34}) 
 
//class 
class Invoice implements Hasformatter{ 
  readonly client:string; 
  private details:string; 
  amount:number; 
  constructor(c:string, d:string, a:number){ 
  this.client=c; 
  this.details=d; 
  this.amount=a; 
  } 
  format(){ 
   return `${this.client} owes $${this.amount} for ${this.details}` 
  } 
  } 
//class 
class Payment implements Hasformatter{ 
  readonly client:string; 
  amount:number; 
  constructor(c:string, a:number){ 
  this.client=c; 
  this.amount=a; 
  } 
  format(){ 
   return `${this.client} owes $${this.amount}` 
  } 
  } 
const inv1=new Invoice("lugi","work on the website of dxp",300) 
const inv2=new Invoice("Saun","work on the website of dxp",310) 
console.log(inv1.format(), inv2.format()); 
let invoice:Invoice[]=[] 
invoice.push(inv1); 
invoice.push(inv2) 
//inv1.client="Sam"; 
inv2.amount=500 
console.log(invoice) 
invoice.forEach(invo=>{ 
  //console.log(invo.details, invo.format()) 
  console.log(invo.format()) 
}) 
let docOne:Hasformatter; 
docOne=new Invoice("Sam","work on the mastercard",300) 
console.log(docOne) 
let docTwo:Hasformatter; 
docTwo=new Payment("Veena",200) 
console.log(docTwo) 
let docs:Hasformatter[]=[] 
docs.push(docOne); 
docs.push(docTwo) 
//inv1.client="Sam"; 
inv2.amount=500 
console.log(docs) 
docs.forEach(invo=>{ 
  //console.log(invo.details, invo.format()) 
  console.log(invo.format()) 
}) 
 
//form 
var frm=document.querySelector('.new-form') as HTMLFormElement; 
//console.log(frm.children) 
var type=document.querySelector('#type') as HTMLSelectElement; 
var to=document.querySelector('#to') as HTMLInputElement; 
var det=document.querySelector('#details') as HTMLInputElement; 
var amt=document.querySelector('#amount') as HTMLInputElement; 
type.addEventListener('change',()=>{ 
  if(type.value=="payment"){ 
    det.style.display="none"; 
  }else{ 
    det.style.display="block"; 
  } 
}) 
 
frm.addEventListener('submit', (e:Event)=>{ 
  e.preventDefault; 
  let doc:Hasformatter; 
  if(type.value=="invoice"){ 
    doc=new Invoice(to.value, det.value, Number(amt.value)) 
  }else{ 
    doc=new Payment(to.value, Number(amt.value)) 
  } 
  console.log(doc) 
  alert("added Sucessful data") 
    
  //console.log(type.value, to.value, det.value, amt.value) 
  //alert(type.value+", "+to.value+", "+det.value+", "+amt.value); 
}); 
 
//generics 
interface resource<T>{ 
uid:number; 
resourceName:string; 
data:T 
} 
const ex:resource<string>={ 
uid:1, 
resourceName:"sam", 
data:"Generics" 
} 
console.log(ex) 
const exTwo:resource<object>={ 
  uid:1, 
  resourceName:"object type generic", 
  data:{name:"Sunny", age:23} 
  } 
console.log(exTwo) 
 
//enum 
enum ResourceNm{book, author, publisher} 
interface bok{ 
  name:string; 
  resourceName:ResourceNm; 
  } 
let bokOne:bok={ 
  name:"sammy", 
  resourceName:ResourceNm.author 
} 
let bokTwo:bok={ 
  name:"Sunny Kales", 
  resourceName:ResourceNm.book 
} 
console.log(bokOne) 
console.log(bokTwo) 
 
//tuples 
let tup:[string, number, boolean]; 
tup=["Sample Tuple",12, true] 
console.log(tup) 
 
