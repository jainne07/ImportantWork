import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterActions from '../store/counter.actions';
import { selectCount, selectDouble } from '../store/counter-selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  double$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
    this.double$=store.select(selectDouble)
  }

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(new counterActions.increment(2));
  }
  decrement() {
    this.store.dispatch(new counterActions.decrement(1));
  }
}
