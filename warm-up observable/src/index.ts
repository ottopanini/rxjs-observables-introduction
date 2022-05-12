import {Observable} from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    subscriber.next('Charlie');
});

observable$.subscribe((value: any) => console.log(value));






