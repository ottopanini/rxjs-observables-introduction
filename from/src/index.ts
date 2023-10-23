import { from } from 'rxjs';

from(['Alice', 'Ben', 'Charlie']).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
});