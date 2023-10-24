import {interval} from "rxjs";

console.log('App started');

const subscription = interval(1000).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
});

