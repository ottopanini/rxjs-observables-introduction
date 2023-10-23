import { fromEvent, Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
    triggerButton.addEventListener('click', (event) => {
        subscriber.next(event);
    });
});

triggerClick$.subscribe((event) => console.log(event.type, event.x, event.y));