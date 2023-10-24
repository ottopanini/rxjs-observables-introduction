import { timer } from 'rxjs';

console.log('App started');

timer(2000).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
});