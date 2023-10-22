import {Observable} from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    setTimeout(() => subscriber.next('Ben'), 2000);
    setTimeout(() => subscriber.next('Charlie'), 4000);
});

const subscription = observable$.subscribe((value: any) => console.log(value));









