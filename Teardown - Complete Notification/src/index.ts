import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(() => {
        subscriber.next('Charlie');
        subscriber.complete();
    }, 2000);

    return () => {
        console.log('Teardown');
    };
});

console.log('Before subscription');
observable$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
});
console.log('After subscribe');