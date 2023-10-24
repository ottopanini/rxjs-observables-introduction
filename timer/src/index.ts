import { Observable } from 'rxjs';

console.log('App started');

const timer$ = new Observable((subscriber) => {
    const timoutId = setTimeout(() => {
        console.log('timeout running');
        subscriber.next(0);
        subscriber.complete();
    }, 2000);

    return () => clearTimeout(timoutId);
});

const subscription = timer$.subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
});

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 1000);
