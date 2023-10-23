import { of } from 'rxjs';

of('Alice', 'Ben', 'Charlie').subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
});
