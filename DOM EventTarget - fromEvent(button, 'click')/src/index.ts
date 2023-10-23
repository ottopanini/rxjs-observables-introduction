import { Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
    const clickHandlerFn = (event) => {
        console.log('Event callback executed');
        subscriber.next(event);
    };

    triggerButton.addEventListener('click', clickHandlerFn);

    return () => {
        triggerButton.removeEventListener('click', clickHandlerFn);
    };
});

const subscription = triggerClick$.subscribe((event) =>
    console.log(event.type, event.x, event.y)
);

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 5000);
