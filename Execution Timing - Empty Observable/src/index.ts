import { Observable } from 'rxjs';

const observable$ = new Observable(subscriber => {
    console.log('Observable executed');
});

console.log('Before subscription');
observable$.subscribe();
console.log('After subdscribe');







