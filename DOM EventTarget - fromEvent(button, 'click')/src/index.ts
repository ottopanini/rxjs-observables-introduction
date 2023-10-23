import { fromEvent } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
    (event) => console.log(event.type, event.x, event.y)
);

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 5000);