import { Observable } from 'rxjs';

const interval$ = new Observable<number>((subscriber) => {
    let counter = 1;
    setInterval(() => {
        console.log('Emitted:', counter);
        subscriber.next(counter++);
    }, 2000);
});

console.log('Before subscribe');
const subscription = interval$.subscribe((value) => console.log(value));
console.log('After subscribe');

setTimeout(() => {
    subscription.unsubscribe();
    console.log('Unsubscribe');
}, 7000);