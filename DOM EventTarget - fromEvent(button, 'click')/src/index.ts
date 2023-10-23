import { Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
    triggerButton.addEventListener('click', (event) => {
        subscriber.next(event);
    });
});

const subscription = triggerClick$.subscribe((event) =>
    console.log(event.type, event.x, event.y)
);

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 5000);
