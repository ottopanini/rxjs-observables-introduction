import { Observable, of, Subscriber } from 'rxjs';

of('Alice', 'Ben', 'Charlie').subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
});

const names$ = new Observable<string>((subscriber) => {
    subscriber.next('Alice');
    subscriber.next('Ben');
    subscriber.next('Charlie');
    subscriber.complete();
});

names$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
});