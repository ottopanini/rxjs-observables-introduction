import { interval } from 'rxjs';

console.log('App started');

const subscription = interval(1000).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
});

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 5000);

