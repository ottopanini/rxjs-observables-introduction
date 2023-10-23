import { Observable } from 'rxjs';

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable((subscriber) => {
    helloButton.addEventListener('click', (event) => {
        subscriber.next(event);
    });
});

helloClick$.subscribe((event) =>
    console.log('Sub 1: ', event.type, event.x, event.y)
);

setTimeout(() => {
    console.log('subscription 2 starts');
    helloClick$.subscribe((event) =>
        console.log('Sub 2: ', event.type, event.x, event.y)
    );
}, 5000);

