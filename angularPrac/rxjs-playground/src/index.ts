import { Observable, catchError, combineLatest, debounceTime, filter, forkJoin, from, fromEvent, map, observable, of, tap } from 'rxjs';
import {ajax} from 'rxjs/ajax'
import { resolve } from '../webpack.config';

// const someObservable$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//  // subscriber.error(new Error('Limit Exceed'))
//  setTimeout(()=>{
//   subscriber.next('Jane');
//   subscriber.complete();
//  },2000)
//  return()=>{
//   console.log("teardown")
//  }
// });
// const subsObserv=someObservable$.subscribe(value => console.log(value), ()=> console.log("Completed subscribe"));
// //const subsObserv=someObservable$.subscribe(value => console.log(value), (error)=>console.log(error));
// setTimeout(() => {
//   console.log("unsubscribe observable");
//   subsObserv.unsubscribe();
// }, 3000);
// const interval$ = new Observable<number>(subscriber => {
//   let counter= 1;
//  const intv=setInterval(()=>{
//   console.log("emitted", counter)
//   subscriber.next(counter++)
//  },1000)
//  return()=>{
//   clearInterval(intv)
//  }
// });
// const intervalCount=interval$.subscribe(value=>console.log(value))
// setTimeout(() => {
//   console.log("unsubscribe counter");
//   intervalCount.unsubscribe();
// }, 4000);
const ajax$=ajax<any>('https://random-data-api.com/api/v2/users');
ajax$.subscribe(value=>console.log("sub1", value.response.first_name))
ajax$.subscribe(value=>console.log("sub2", value.response.first_name))
ajax$.subscribe(value=>console.log("sub3", value.response.first_name))
//same as of is call and from is apply and of return full array and object but from one by one array or array of objects
of('alice', 'sam', 'lack', 122).subscribe(value=>console.log(value))
of(['alice', 'sam', 'lack']).subscribe(value=>console.log(value))
of([{ a: 'Object1', b: 'Object2', c: false },{ a: 'Object1.1', b: 'Object2.1', c: false }]).subscribe(value=>console.log(value))
of({ a: 'Object1', b: 'Object2', c: false }).subscribe(value=>console.log(value))
from(['alice', 'sam', 'lack']).subscribe(value=>console.log(value))
from('welcome world').subscribe(value=>console.log(value))
from([{ a: 'Object1', b: 'Object2', c: false },{ a: 'Object1.1', b: 'Object2.1', c: false }]).subscribe(value=>console.log(value))
const somePromise=new Promise((resolve, reject)=>{
  //resolve("resolved!")
  reject("rejected!")
})
from(somePromise).subscribe(value=>console.log(value),error=>console.log('Error:', error))
const triggerButton=document.querySelector('#trigger')
fromEvent(triggerButton, 'click').subscribe(event=>console.log(event.type))
//forkJoin
const ajaxname=ajax<any>('https://random-data-api.com/api/v2/users');
const ajaxAddress=ajax<any>('https://random-data-api.com/api/v2/addresses');
//http
forkJoin([ajaxname, ajaxAddress]).subscribe(([nameAjx,addAjax])=>{
  console.log(`${nameAjx.response.first_name} is adrress ${addAjax.response.street_address}`)
})
//input change
const input=document.querySelector('#tempInput')
const select=document.querySelector('#tempSelect')
const res=document.querySelector('#result')
const inputEvent$=fromEvent<any>(input, 'input')
const selectEvent$=fromEvent<any>(select, 'input')
combineLatest([inputEvent$, selectEvent$]).subscribe(([inputEv, selectEv])=>{
  let temp=+inputEv.target["value"];
  let conv=selectEv.target["value"];
  let result: number;
  if(conv==='F->C'){
    result=(temp-32)* 5/9 
  }else{
    result=temp*9/5+32
  }
  res.innerHTML=String(result);
  console.log(inputEv.target["value"])
  console.log(selectEv.target["value"])
})

//pipe operator
interface News{
  category: "business" | "sports";
  content: string;
}
const newFeed$=new Observable<News>(subscriber=>{
  subscriber.next({category: "business", content: "hello A"})
  subscriber.next({category: "sports", content: "hello B"})
  subscriber.next({category: "business", content: "hello C"})
  subscriber.next({category: "business", content: "hello D"})
})

newFeed$.pipe(filter(items=> items.category ==="business"),map(item=> item.content)).subscribe(item=> console.log(item))

of(1,2,4,5,8,11).pipe(tap(chk=>console.log("spy", chk)),filter(items=> items>5)).subscribe(value=> console.log('check',value))

const range=document.querySelector('#myRange')
fromEvent<any>(range,'input').pipe(debounceTime(1000),map(ev=>ev.target['value'])).subscribe(item=>console.log(item))

const fallingerror=new Observable<string>(subscriber=>{
  subscriber.error(new Error('error found'))
})
fallingerror.pipe(catchError=>of('Something went wrong!')).subscribe(value=>console.log(value))