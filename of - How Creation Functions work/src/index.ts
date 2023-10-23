import { Observable, of, Subscriber } from 'rxjs';

ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
});

function ourOwnOf(...args: string[]): Observable<string> {
    return new Observable<string>((subscriber) => {
        args.forEach((value) => subscriber.next(value));
        subscriber.complete();
    });
}