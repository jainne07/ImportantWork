import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, fromEvent, interval, Observable, of, range, timer, concat, merge, delay, exhaustMap, combineLatest, withLatestFrom, zip, forkJoin, Subject, BehaviorSubject } from 'rxjs';
import { map, toArray, take, pluck, takeLast, filter, debounceTime, distinctUntilChanged, mergeMap, concatMap, switchMap, tap } from 'rxjs';
import { ICourse } from '../course';
import { CoursesService } from '../course.service';

@Component({
  selector: 'app-observ-subs',
  templateUrl: './observ-subs.component.html',
  styles: [
  ]
})
export class ObservSubsComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('selName') selName!: ElementRef;
  @ViewChild('selColor') selColor!: ElementRef;
  @ViewChild('searchform') searchform!: NgForm;
  @ViewChild('dataPost') dataPost!: NgForm;
  video: any;
  arr?: any[];
  arr1?: any;
  arr2?: any;
  arr3?: any;
  obj1?: {};
  vidConct?: any;
  dt1?: any;
  dt2?: any;
  resData?: string;
  names = ['Kristie Cole', 'Leonor Cross', 'Marsh Mccall'];
  colors = ['LightGreen', 'MediumPurple', 'LightBlue', 'IndianRed']
  resDataNew?: any
  frmVal?: any
  users = [
    {
      "age": 23,
      "name": "Bird Ramsey",
      "gender": "male",
      "company": "NIMON",
      "email": "birdramsey@nimon.com",
      "mobile": [323231, 23234]
    },
    {
      "age": 31,
      "name": "Lillian Burgess",
      "gender": "female",
      "company": "LUXURIA",
      "email": "lillianburgess@luxuria.com",
      "mobile": [1212121, 4434343]
    },
    {
      "age": 34,
      "name": "Kristie Cole",
      "gender": "female",
      "company": "QUADEEBO",
      "email": "kristiecole@quadeebo.com",
      "mobile": [122121, 1212211]
    },
    {
      "age": 30,
      "name": "Leonor Cross",
      "gender": "female",
      "company": "GRONK",
      "email": "leonorcross@gronk.com",
      "mobile": [32321, 32323]
    },
    {
      "age": 28,
      "name": "Marsh Mccall",
      "gender": "male",
      "company": "ULTRIMAX",
      "email": "marshmccall@ultrimax.com",
      "mobile": [2112121, 244343]
    }
  ]
  //obj1?:{}; 
  obMsg?: string;
  constructor(private _course: CoursesService) { }
  ngOnInit(): void {
    //interval, range, timer 
    const broadcastVid = interval(1000)
    //timer(delay,interval) 
    //const broadcastVid=timer(1200,1000) 
    //const broadcastVid=range(15, 60) 
    const videoSubs = broadcastVid.subscribe(res => {
      console.log('video', res)
      this.obMsg = 'Video ' + res
      this.print(this.obMsg, 'intervalCont')
      if (res >= 5) {
        //alert('hello') 
        videoSubs.unsubscribe()
      }
    })

    //tap by array 
    const source = interval(1000)
    const unsource = source.pipe(
      tap(res => {
        console.log('tap=>', res)
        if (res == 3) {
          unsource.unsubscribe()
        }
      }),
      map(nm => this.names[nm]))
      .subscribe(res => {
        console.log('Name:', res)
      })

    //of 
    of('anup', 10, 20, true).subscribe(res => {
      console.log(res)
      this.print(res, 'ofContainer')
    }
    );
    of(['anup', 'sam', true]).subscribe(res => {
      console.log(res)
      this.arr = res
      //this.print(res,'ofContainer') 
    }
    );
    of({ a: 'Object1', b: 'Object2', c: false }).subscribe(res => {
      console.log(res)
      this.obj1 = res
      //this.print(res,'ofContainer') 
    }
    );
    of(10, 20, 30).subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('the end'),
    );

    //from 
    from(['Java', 'AEM', 'Angular']).subscribe(res => {
      console.log(res)
      this.print(res, 'fromCnt')
    })
    from('welcome').subscribe(res => {
      console.log(res)
      this.print(res, 'fromCnt1')
    })

    //toarray() 
    const broadcast = interval(1000)
    const video = broadcast.pipe(
      take(8),
      map(s => 'Video ' + s),
      toArray()
    ).subscribe(res => {
      console.log(res)
      this.arr1 = res;
    })
    from(this.users).pipe(
      toArray()
    ).subscribe(res => {
      console.log(res)
    })
    of('anup', 'sam', 'alex', 'john').pipe(
      toArray()
    ).subscribe(res => {
      console.log(res)
    })

    //observer create 
    const obser = new Observable(subscriber => {
      subscriber.next('Angular');
      subscriber.next('React');
      subscriber.complete();
      subscriber.next('Javascript');
      subscriber.error(new Error('Limit Exceed'))
      setTimeout(() => {
        subscriber.next('Html');
        subscriber.complete();
      }, 1000);
    })
    obser.subscribe(
      res => console.log(res)
    )
    //map, take 
    const user = from(this.users)
    user.pipe(
      takeLast(4),
      map(user => user.name + " - " + user.age),
      toArray()
    ).subscribe(res => {
      console.log(res)
      this.arr2 = res
    })

    //pluck 
    const user1 = from(this.users)
    user1.pipe(
      //pluck('email'), 
      pluck('mobile', '1'),
      toArray()
    ).subscribe(res => {
      console.log(res)
      this.arr3 = res
    })

    //takelast 
    const user2 = from(this.users)
    user2.pipe(
      takeLast(3),
      pluck('name'),
      toArray()
    ).subscribe(res => {
      console.log(res)
    })

    //filter 
    const user3 = from(this.users)
    user3.pipe(
      //filter(nm=> nm.name.length>12), 
      filter(nm => nm.gender == 'female'),
      toArray()
    ).subscribe(res => {
      console.log('Filter: ', res)
    })
    //concat 
    const freshVideo = interval(1000).pipe(take(3), map(s => 'FreshVideo ' + s))
    const ComedyVideo = interval(1000).pipe(take(3), map(s => 'ComedyVideo ' + s))
    const finObs = concat(freshVideo, ComedyVideo)
    finObs.pipe(toArray()).subscribe(
      res => {
        console.log(res)
        this.vidConct = res
      }
    )
    //merge 
    const freshVid = interval(1000).pipe(take(3), map(s => 'freshVid ' + s))
    const comedyVid = interval(1000).pipe(take(3), map(s => 'comedyVid ' + s))
    const finObs1 = merge(freshVid, comedyVid)
    finObs1.pipe(toArray()).subscribe(
      res => {
        console.log('Merge', res)
        // this.vidConct=res 
      })
    //mergeMap 
    const getVal = of('course Available')
    const languages = of('Java', 'Angular', 'React')
    languages.pipe(
      mergeMap(val =>
        getVal.pipe(
          delay(2000),
          map(nwVal => ' ' + val + ' ' + nwVal)
        ))
    ).subscribe(res => {
      console.log('Mergemap ', res)
      this.print(res, 'mergeCnt')
    })
    //ConcatMap 
    const getVal1 = of('course Available')
    const languages1 = of('Javascript', 'AEM', 'React')
    languages1.pipe(
      concatMap(val =>
        getVal1.pipe(
          delay(2000),
          map(nwVal => ' ' + val + ' ' + nwVal)
        ))
    ).subscribe(res => {
      console.log('ConcatMap ', res)
      this.print(res, 'concatCnt')
    })
    //SwitchMap 
    const getVal2 = of('course Available')
    const languages2 = of('Vue', 'Stencil', 'Angular')
    languages2.pipe(
      switchMap(val =>
        getVal2.pipe(
          delay(2000),
          map(nwVal => ' ' + val + ' ' + nwVal)
        ))
    ).subscribe(res => {
      console.log('SwitchMap ', res)
      this.print(res, 'switchCnt')
    })
    //ExhaustMap 
    const getVal3 = of('course Available')
    const languages3 = of('Vue', 'Stencil', 'Angular')
    languages3.pipe(
      exhaustMap(val =>
        getVal3.pipe(
          delay(1000),
          map(nwVal => ' ' + val + ' ' + nwVal)
        ))
    ).subscribe(res => {
      console.log('ExhaustMap ', res)
      this.print(res, 'exhaustCnt')
    })
    //subject 
    const subj = new Subject()
    subj.subscribe(res => console.log('Subject called', res))
    subj.next('example')
    //behaviour 
    const subj1 = new BehaviorSubject('Hello behaviour subject')
    subj1.subscribe(res => console.log('Subject called', res))
  }
  ngAfterViewInit(): void {
    let count: number = 0;
    fromEvent(this.addBtn.nativeElement, 'click')
      .subscribe(res => {
        //console.log('video', count++) 
        let countVal = "Video " + count++
        this.print(countVal, 'myContainer')
      })
    //debounce and distinct 
    fromEvent<any>(this.name.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(res => {
        console.log(res)
        this.resData = res
      })
    // //debounce and distinct 
    const formVal = this.searchform.valueChanges;
    formVal?.pipe(
      filter(nm => nm.searchterm.length > 1),
      pluck('searchterm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(res => this._course.getCourses(res)),
    )
      .subscribe(res => {
        console.log(res)
        this.resDataNew = res
      })

    //calling services to get data 
    this._course.getCourses('rxjs').subscribe(data => {
      console.log('Response Data', data)
    })
    //customlatest 
    const namesCustom = fromEvent<any>(this.selName.nativeElement, 'change')
      .pipe(
        map(event => event.target.value),
        take(2)
      )
    const colorsName = fromEvent<any>(this.selColor.nativeElement, 'change')
      .pipe(
        map(event => event.target.value),
        take(2)
      )
    //combine latest 
    combineLatest(namesCustom, colorsName).subscribe(res => {
      console.log(res)
      this.combineDiv(res[0], res[1], 'combinelatest')
    }
    )
    //namesCustom master, colorsname slave 
    namesCustom.pipe(withLatestFrom(colorsName)).subscribe(res => {
      console.log(res)
      this.combineDiv(res[0], res[1], 'latestfrom')
    }
    )
    //zip for both select box 
    zip(namesCustom, colorsName).subscribe(res => {
      console.log(res)
      this.combineDiv(res[0], res[1], 'zip')
    }
    )
    //zip for both select box 
    forkJoin(namesCustom, colorsName).subscribe(res => {
      console.log(res)
      this.combineDiv(res[0], res[1], 'forkjoin')
    }
    )
  }
  print(val: any, idxVal: string) {
    var el = document.createElement('li') as HTMLElement
    var idx = document.getElementById(idxVal) as HTMLElement
    el.innerText = val
    idx.appendChild(el)
  }
  combineDiv(val: any, color: any, container: string) {
    var el = document.createElement('div') as HTMLElement
    var idx = document.getElementById(container) as HTMLElement
    el.innerText = val
    el.setAttribute('class', color)
    idx.appendChild(el)
  }
  delete(id: number) {
    this._course.deleteCourses(id).subscribe(data => {
      console.log('Delete data', data)
      // console.log(id) 
    })
  }
  addInfo(newData: any) {
    //const newData={id:21, thumb:"img/sample", title:"angular practice", description:"this is sample creation"} 
    this._course.addCourses(newData).subscribe(data => {
      //console.log('Delete data',data) 
      console.log(newData)
    })
  }
}
