import { Observable } from 'rxjs';

console.log('App started');

const interval$ = new Observable((subscriber) => {
    let count = 0;

    const intervalId = setInterval(() => {
        console.log('interval running');
        subscriber.next(count++);
    }, 1000);

    return () => clearTimeout(intervalId);
});

const subscription = interval$.subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
});

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 5000);