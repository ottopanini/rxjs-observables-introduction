import { from } from 'rxjs';

const somePromise = new Promise((resolve, reject) => {
    resolve('Resolved');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
});
