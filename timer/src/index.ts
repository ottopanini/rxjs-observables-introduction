import { Observable } from 'rxjs';

console.log('App started');

const timer$ = new Observable((subscriber) => {
    setTimeout(() => {
        subscriber.next(0);
        subscriber.complete();
    }, 2000);
});

timer$.subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
});
