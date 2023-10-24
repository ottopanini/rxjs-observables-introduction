import { timer } from 'rxjs';

console.log('App started');

const subscription = timer(2000).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
});

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 1000);