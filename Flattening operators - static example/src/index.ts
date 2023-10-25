import { concatMap, Observable, Subscriber } from 'rxjs';
import { of } from 'rxjs';

const source$ = new Observable((subscriber) => {
    setTimeout(() => subscriber.next('A'), 2000);
    setTimeout(() => subscriber.next('B'), 5000);
});

console.log('App started');
source$.pipe(concatMap((val) => of(1, 2))).subscribe((val) => console.log(val));