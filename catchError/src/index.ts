import { Observable } from 'rxjs';

const failingHttpRequest$ = new Observable((subscriber) => {
    setTimeout(() => {
        subscriber.error(new Error('Timeout'));
    }, 3000);
});

console.log('App started');

failingHttpRequest$.subscribe((value) => console.log(value));