import { from } from 'rxjs';

const somePromise = new Promise((resolve, reject) => {
    //resolve('Resolved');
    reject('Rejected');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
    error: (error) => console.log('Error: ', error),
});
