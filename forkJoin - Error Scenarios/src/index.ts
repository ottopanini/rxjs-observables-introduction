import { forkJoin, Observable } from 'rxjs';

const a$ = new Observable((subscription) => {
        setTimeout(() => {
                subscription.next('A');
                subscription.complete();
        }, 5000);

        return () => {
                console.log('A teardown');
        };
});

const b$ = new Observable((subscription) => {
        setTimeout(() => {
                subscription.error('Failure');
        }, 3000);

        return () => {
                console.log('B teardown');
        };
});

forkJoin([a$, b$]).subscribe({
        next: (val) => console.log(val),
        complete: () => console.log('Completed'),
        error: (error) => console.log('Error: ', error),
});