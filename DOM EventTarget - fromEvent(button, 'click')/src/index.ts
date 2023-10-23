import { fromEvent } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

fromEvent<MouseEvent>(triggerButton, 'click').subscribe((event) =>
    console.log(event.type, event.x, event.y)
);
