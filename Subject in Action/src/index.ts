import { fromEvent, map, Subject } from 'rxjs';

const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

const value$ = new Subject<string>();

fromEvent(emitButton, 'click')
    .pipe(map(() => inputElement.value))
    .subscribe(value$);

fromEvent(subscribeButton, 'click').subscribe(() => {
    console.log('New Subscription');
    value$.subscribe((value) => console.log(value));
});
