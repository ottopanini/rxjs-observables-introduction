import {Observable} from 'rxjs';

new Observable<string>(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    subscriber.next('Charlie');
}).subscribe();






